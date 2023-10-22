// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATLO58Qvg0ipueqCIrdz0Cko5U1LJbNSY",
  authDomain: "tell-rexy.firebaseapp.com",
  projectId: "tell-rexy",
  storageBucket: "tell-rexy.appspot.com",
  messagingSenderId: "265659929186",
  appId: "1:265659929186:web:a7c95a64c9c762e8df773b",
  measurementId: "G-88ZQKPRY4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);