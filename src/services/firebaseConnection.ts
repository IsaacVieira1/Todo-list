import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDje-V9CkzpRxaCHYxC7DG8iz6m07zNJ5E",
  authDomain: "to-do-plus-155b6.firebaseapp.com",
  projectId: "to-do-plus-155b6",
  storageBucket: "to-do-plus-155b6.firebasestorage.app",
  messagingSenderId: "676364439145",
  appId: "1:676364439145:web:eb43b56efe73ca4e001cf8"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
