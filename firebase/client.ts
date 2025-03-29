// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsSMIang0hyB2RGgRPl5LsDxKT5CtGCow",
  authDomain: "prepwise-47670.firebaseapp.com",
  projectId: "prepwise-47670",
  storageBucket: "prepwise-47670.firebasestorage.app",
  messagingSenderId: "585337279978",
  appId: "1:585337279978:web:db9071968a7415daaf4e93",
  measurementId: "G-XF28EMNEZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);