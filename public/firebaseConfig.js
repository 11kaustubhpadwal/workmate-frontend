// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA63HpTRBQpu_R-hE3kXI5AahvRhJuAQHQ",
  authDomain: "workmate-auth.firebaseapp.com",
  databaseURL: "https://workmate-auth.firebaseio.com",
  projectId: "workmate-auth",
  storageBucket: "workmate-auth.appspot.com",
  messagingSenderId: "440852429605",
  appId: "1:440852429605:web:006fafc2b6f9b4d008b8cc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
