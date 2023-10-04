import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7W58gR_4-CLN6NlnwedPXuCLxLdQMFTA",
  authDomain: "dragon-news-2a381.firebaseapp.com",
  projectId: "dragon-news-2a381",
  storageBucket: "dragon-news-2a381.appspot.com",
  messagingSenderId: "853633752434",
  appId: "1:853633752434:web:140d637df513e02d8d91eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export "auth" for All
export const auth = getAuth(app);