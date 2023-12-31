// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUxNntm-dqHz4sojQFIgJvOlpidBkPcmg",
  authDomain: "mechamongus-36015.firebaseapp.com",
  projectId: "mechamongus-36015",
  storageBucket: "mechamongus-36015.appspot.com",
  messagingSenderId: "642734153029",
  appId: "1:642734153029:web:ee891d8cacc2a8a1aeb22c",
  measurementId: "G-1339XC10S4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
