// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);