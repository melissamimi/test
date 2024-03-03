// Firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
apiKey: "AIzaSyDLhbqDhzXEpqKFFQLBYe9jsl1bvPVNj4s",
  authDomain: "prj1cs.firebaseapp.com",
  projectId: "prj1cs",
  storageBucket: "prj1cs.appspot.com",
  messagingSenderId: "1060590247107",
  appId: "1:1060590247107:web:d2257f635c6d5abf8fd676",
  measurementId: "G-CP8Z2QWKCV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
