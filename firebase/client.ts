// Import the functions you need from the SDKs you need
import { initializeApp, getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import  { getFirestore } from "firebase/firestore";

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
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);