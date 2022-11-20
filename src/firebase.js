
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore}  from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC353DGd_Gltv6fXogoDSUkyrT-8crptYQ",
  authDomain: "disneyclone-f233e.firebaseapp.com",
  projectId: "disneyclone-f233e",
  storageBucket: "disneyclone-f233e.appspot.com",
  messagingSenderId: "701440396749",
  appId: "1:701440396749:web:3cbe96b4b51c14ff2a8884",
  measurementId: "G-1X8QF9B0QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

 
export { db, auth, provider};