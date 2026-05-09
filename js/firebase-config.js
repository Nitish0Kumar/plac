// ===================================================
// FIREBASE CONFIG — PlacementPro
// ===================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDp9gGsoyjQwosL-iAzUwBcEseuJQhv14o",
  authDomain: "njkflaks.firebaseapp.com",
  projectId: "njkflaks",
  storageBucket: "njkflaks.firebasestorage.app",
  messagingSenderId: "118645991651",
  appId: "1:118645991651:web:c1d1b9347497361a65bdd6",
  measurementId: "G-9WCWBEQ21Q"
};

const app      = initializeApp(firebaseConfig);
export const auth     = getAuth(app);
export const db       = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
