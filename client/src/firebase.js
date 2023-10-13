// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-project-5508d.firebaseapp.com",
  projectId: "real-estate-project-5508d",
  storageBucket: "real-estate-project-5508d.appspot.com",
  messagingSenderId: "739533329167",
  appId: "1:739533329167:web:59250eb944123b37bd247a"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);