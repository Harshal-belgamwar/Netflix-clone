import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9OmGCfucyJmGbaTUR0n7C12albv8EBI0",
  authDomain: "netflix-clone-9bf4b.firebaseapp.com",
  projectId: "netflix-clone-9bf4b",
  storageBucket: "netflix-clone-9bf4b.firebasestorage.app",
  messagingSenderId: "723954194973",
  appId: "1:723954194973:web:257703f653f64ba8b9c4f4",
  measurementId: "G-1SQP3J69LH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    
    await addDoc(collection(db, "users"), {  // Changed "user" to "users"
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    return { success: true, user };
  } catch (error) {
    console.error("Signup Error:", error.message);
    return { success: false, error: error.message };
  }
};

const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);  // Added `await`
    return { success: true, user: response.user };
  } catch (error) {
    console.error("Login Error:", error.message);
    return { success: false, error: error.message };
  }
};

const logout = async () => {
  try {
    await signOut(auth);  // Added `await` and `try/catch`
    return { success: true };
  } catch (error) {
    console.error("Logout Error:", error.message);
    return { success: false, error: error.message };
  }
};

export { auth, db, signup, login, logout };
