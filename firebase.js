//important functions
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCdlG-iBgs4reemdW8JiBkEluZ5mLAiJF0",
    authDomain: "bootlegtwitter-c129c.firebaseapp.com",
    projectId: "bootlegtwitter-c129c",
    storageBucket: "bootlegtwitter-c129c.appspot.com",
    messagingSenderId: "640135205377",
    appId: "1:640135205377:web:f3b50ab2c40b2a7797e600"
  };

  // Initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };