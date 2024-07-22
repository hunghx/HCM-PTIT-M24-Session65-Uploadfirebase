// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALiMzbdBcu1M506VHF7P6Q3qiKb28pq3k",
  authDomain: "react-upload-4e890.firebaseapp.com",
  projectId: "react-upload-4e890",
  storageBucket: "react-upload-4e890.appspot.com",
  messagingSenderId: "19379801765",
  appId: "1:19379801765:web:e7535ef4860527d1a5474c",
  measurementId: "G-47CC2LFD3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);