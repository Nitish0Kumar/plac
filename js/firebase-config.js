// ===================================================
// FIREBASE CONFIG — PlacementPro
// ===================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFMYmZusnC6Un3QW3to1rjaxDV-kamD_I",
  authDomain: "placement-ed155.firebaseapp.com",
  projectId: "placement-ed155",
  storageBucket: "placement-ed155.firebasestorage.app",
  messagingSenderId: "816104176592",
  appId: "1:816104176592:web:dfb9ecf13315c367d817d5",
  measurementId: "G-TBX7VGH957"
};

const app      = initializeApp(firebaseConfig);
export const auth     = getAuth(app);
export const db       = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
