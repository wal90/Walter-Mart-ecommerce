
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 


const firebaseConfig = {
  apiKey: "AIzaSyBNCrjaMYx2hoy9BP6BTgUpgrNFNi3bypw",
  authDomain: "ecommerce-5d41a.firebaseapp.com",
  projectId: "ecommerce-5d41a",
  storageBucket: "ecommerce-5d41a.appspot.com",
  messagingSenderId: "271305038824",
  appId: "1:271305038824:web:c02d24fcb39b944b0f625d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)


export default app;