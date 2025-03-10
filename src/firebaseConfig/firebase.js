import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdhKw5UsXI8XCLYCRel6XE95kf3-f9sDs",
  authDomain: "webturnos-c4d67.firebaseapp.com",
  projectId: "webturnos-c4d67",
  storageBucket: "webturnos-c4d67.firebasestorage.app",
  messagingSenderId: "600656204920",
  appId: "1:600656204920:web:16067cbf56107727a8898d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)