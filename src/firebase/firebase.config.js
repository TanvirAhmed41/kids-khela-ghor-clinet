// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB019eORaq9FwR9Ttqj53BXF8HgGpHa2Co",
  authDomain: "kids-khelaghor.firebaseapp.com",
  projectId: "kids-khelaghor",
  storageBucket: "kids-khelaghor.appspot.com",
  messagingSenderId: "244928356141",
  appId: "1:244928356141:web:56cf9ae7667e3e2a12fda4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;