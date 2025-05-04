// src/lib/authService.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db, googleProvider } from "./firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

// Email Signup
export const signup = async (
  email: string,
  password: string,
  name: string
): Promise<UserCredential> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  // Save additional user details in Firestore
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    name,
    createdAt: serverTimestamp(),
  });
  return userCredential;
};

// Email Login
export const login = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Google Login
export const loginWithGoogle = (): Promise<UserCredential> => {
  return signInWithPopup(auth, googleProvider);
};

// Logout
export const logout = (): Promise<void> => {
  return signOut(auth);
};

// Password Reset
export const resetPassword = (email: string): Promise<void> => {
  return sendPasswordResetEmail(auth, email);
};
