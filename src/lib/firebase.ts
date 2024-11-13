import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC-Rqk-AhW3T2oDf1GxzHTi_qlKxRHAD9M",
  authDomain: "uzunba-58513.firebaseapp.com",
  projectId: "uzunba-58513",
  storageBucket: "uzunba-58513.firebasestorage.app",
  messagingSenderId: "1033185481620",
  appId: "1:1033185481620:web:089fc63a314188d77eb581",
  measurementId: "G-1412QME71D"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);