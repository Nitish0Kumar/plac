// ===================================================
// AUTH.JS — Firebase Authentication for PlacementPro
// ===================================================
import { auth, db, provider } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc, setDoc, getDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ─── HELPERS ────────────────────────────────────────────
function setLocalUser(user) {
  const u = {
    uid:    user.uid,
    name:   user.displayName || user.email.split('@')[0],
    email:  user.email,
    avatar: user.photoURL || ((user.displayName||user.email)[0]).toUpperCase(),
    role:   'student'
  };
  localStorage.setItem('pp_current_user', JSON.stringify(u));
  localStorage.setItem('pp_user', JSON.stringify(u)); // legacy key
  return u;
}
function clearLocalUser() {
  localStorage.removeItem('pp_current_user');
  localStorage.removeItem('pp_user');
  localStorage.removeItem('pp_dsa_progress');
}

// Save extra user profile info to Firestore
async function saveUserProfile(fbUser, extra = {}) {
  const ref = doc(db, 'users', fbUser.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      uid:       fbUser.uid,
      name:      fbUser.displayName || extra.name || fbUser.email.split('@')[0],
      email:     fbUser.email,
      avatar:    fbUser.photoURL || ((fbUser.displayName || fbUser.email)[0]).toUpperCase(),
      role:      'student',
      college:   extra.college || '',
      branch:    extra.branch  || '',
      year:      extra.year    || '',
      joinedAt:  serverTimestamp(),
      provider:  extra.provider || 'email'
    });
  }
}

// ─── PAGE INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop();
  if (page === 'login.html')           initLogin();
  if (page === 'signup.html')          initSignup();
  if (page === 'forgot-password.html') initForgot();
});

// ─── AUTH STATE GUARD ───────────────────────────────────
// Runs on every page — syncs Firebase session → localStorage
onAuthStateChanged(auth, async (user) => {
  if (user) {
    setLocalUser(user);
    // Fetch DSA progress from Firestore
    try {
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      let progress = {};
      if (docSnap.exists() && docSnap.data().dsa_progress) {
        progress = docSnap.data().dsa_progress;
      }
      localStorage.setItem('pp_dsa_progress', JSON.stringify(progress));
      
      // Sync memory state
      if (window.DSA_PROBLEMS) {
        window.DSA_PROBLEMS.forEach(p => { p.done = !!progress[p.id]; });
      }
      
      // Refresh UI if necessary
      if (typeof window.renderDSATopics === 'function') {
        window.renderDSATopics();
        window.renderDSATable();
        window.updateDSAProgress();
      }
    } catch (e) {
      console.warn("Could not fetch user DSA progress", e);
    }
  } else {
    clearLocalUser();
    // Clear memory state
    if (window.DSA_PROBLEMS) {
      window.DSA_PROBLEMS.forEach(p => p.done = false);
    }
    if (typeof window.renderDSATopics === 'function') {
      window.renderDSATopics();
      window.renderDSATable();
      window.updateDSAProgress();
    }
  }
});

// ─── LOGIN ──────────────────────────────────────────────
function initLogin() {
  const form      = document.getElementById('login-form');
  const emailIn   = document.getElementById('login-email');
  const passIn    = document.getElementById('login-pass');
  const submitBtn = document.getElementById('login-btn');
  const btnText   = document.getElementById('btn-text');
  const errorMsg  = document.getElementById('login-error');

  // ── Email / Password login ──
  form && form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsg.textContent = '';
    const email = emailIn.value.trim();
    const pass  = passIn.value;
    if (!email || !pass) { errorMsg.textContent = 'Please fill in all fields.'; return; }

    submitBtn.disabled = true;
    if (btnText) btnText.innerHTML = '<span class="btn-spin"></span> Signing in…';

    try {
      const cred = await signInWithEmailAndPassword(auth, email, pass);
      const u = setLocalUser(cred.user);
      if (typeof Toast !== 'undefined') Toast.success(`Welcome back, ${u.name}! 👋`);
      setTimeout(() => window.location.href = 'dashboard.html', 600);
    } catch (err) {
      errorMsg.textContent = firebaseErrorMsg(err.code);
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'Sign In';
    }
  });

  // ── Google login ──
  const googleBtn = document.getElementById('google-login');
  googleBtn && googleBtn.addEventListener('click', async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      await saveUserProfile(result.user, { provider: 'google' });
      setLocalUser(result.user);
      window.location.href = 'dashboard.html';
    } catch (err) {
      const errorMsg = document.getElementById('login-error');
      if (errorMsg) errorMsg.textContent = firebaseErrorMsg(err.code);
    }
  });
}

// ─── SIGNUP ─────────────────────────────────────────────
function initSignup() {
  const form      = document.getElementById('signup-form');
  const submitBtn = document.getElementById('signup-btn');
  const btnText   = document.getElementById('btn-text');
  const errEl     = document.getElementById('signup-error');

  // ── Email / Password signup ──
  form && form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errEl.textContent = '';

    // Build name from first + last fields
    const fname = (document.getElementById('signup-fname')?.value || '').trim();
    const lname = (document.getElementById('signup-lname')?.value || '').trim();
    const name  = (document.getElementById('signup-name')?.value  || `${fname} ${lname}`).trim();
    const email = document.getElementById('signup-email').value.trim();
    const pass  = document.getElementById('signup-pass').value;
    const conf  = document.getElementById('signup-confirm').value;
    const terms = document.getElementById('agree-terms')?.checked;

    if (!name || !email || !pass) { errEl.textContent = 'Fill all required fields.';      return; }
    if (pass !== conf)            { errEl.textContent = 'Passwords do not match.';         return; }
    if (pass.length < 6)          { errEl.textContent = 'Password must be ≥ 6 characters.'; return; }
    if (terms === false)          { errEl.textContent = 'Please accept the terms.';         return; }

    submitBtn.disabled = true;
    if (btnText) btnText.innerHTML = '<span class="btn-spin"></span> Creating account…';

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, pass);
      // Update Firebase display name
      await updateProfile(cred.user, { displayName: name });
      // Save to Firestore
      await saveUserProfile(cred.user, { name, provider: 'email' });
      setLocalUser({ ...cred.user, displayName: name });

      if (typeof Toast !== 'undefined') Toast.success('Account created! Welcome aboard 🎉');
      setTimeout(() => window.location.href = 'dashboard.html', 800);
    } catch (err) {
      errEl.textContent = firebaseErrorMsg(err.code);
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'Create Free Account';
    }
  });

  // ── Google signup ──
  const googleBtn = document.getElementById('google-signup');
  googleBtn && googleBtn.addEventListener('click', async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      await saveUserProfile(result.user, { provider: 'google' });
      setLocalUser(result.user);
      window.location.href = 'dashboard.html';
    } catch (err) {
      const errEl = document.getElementById('signup-error');
      if (errEl) errEl.textContent = firebaseErrorMsg(err.code);
    }
  });
}

// ─── FORGOT PASSWORD ────────────────────────────────────
function initForgot() {
  const form = document.getElementById('forgot-form');
  form && form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email     = document.getElementById('forgot-email').value.trim();
    const successEl = document.getElementById('forgot-success');
    const errorEl   = document.getElementById('forgot-error');

    errorEl.textContent   = '';
    if (successEl) successEl.style.display = 'none';

    if (!email) { errorEl.textContent = 'Enter your email address.'; return; }

    try {
      await sendPasswordResetEmail(auth, email);
      if (successEl) {
        successEl.style.display = 'flex';
        successEl.textContent   = `✅ Reset link sent to ${email}. Check your inbox.`;
      }
    } catch (err) {
      errorEl.textContent = firebaseErrorMsg(err.code);
    }
  });
}

// ─── GLOBAL LOGOUT ──────────────────────────────────────
window.ppLogout = async function() {
  await signOut(auth);
  clearLocalUser();
  window.location.href = 'login.html';
};

// ─── ERROR MESSAGES ─────────────────────────────────────
function firebaseErrorMsg(code) {
  const map = {
    'auth/user-not-found':       'No account found with this email.',
    'auth/wrong-password':       'Incorrect password. Please try again.',
    'auth/invalid-credential':   'Invalid email or password.',
    'auth/email-already-in-use': 'This email is already registered. Sign in instead.',
    'auth/weak-password':        'Password should be at least 6 characters.',
    'auth/invalid-email':        'Please enter a valid email address.',
    'auth/too-many-requests':    'Too many attempts. Please wait and try again.',
    'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
    'auth/network-request-failed': 'Network error. Check your connection.',
  };
  return map[code] || `Error: ${code}`;
}
