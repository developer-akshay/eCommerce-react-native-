// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi0MwwV7r-ZNTdEnfdxvNtWias4zPhpPg",
  authDomain: "ecommerce-react-native-16962.firebaseapp.com",
  projectId: "ecommerce-react-native-16962",
  storageBucket: "ecommerce-react-native-16962.appspot.com",
  messagingSenderId: "547715920025",
  appId: "1:547715920025:web:64e4592bc4455d34f8c808",
  measurementId: "G-B5CMKE0FYQ"
};

// FIREBASE_API_KEY=AIzaSyDi0MwwV7r-ZNTdEnfdxvNtWias4zPhpPg
// FIREBASE_AUTH_DOMAIN=ecommerce-react-native-16962.firebaseapp.com
// FIREBASE_PROJECT_ID=ecommerce-react-native-16962
// FIREBASE_STORAGE_BUCKETt=ecommerce-react-native-16962.appspot.com
// FIREBASE_MESSAGING_SENDER_ID=547715920025
// FIREBASE_APP_ID=1:547715920025:web:64e4592bc4455d34f8c808
// FIREBASE_MEASUREMENT_ID=G-B5CMKE0FYQ

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);