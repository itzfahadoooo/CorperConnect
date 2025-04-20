// src/lib/authService.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";

// Email Signup
export const signup = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Email Login
export const login = (email: string, password: string): Promise<UserCredential> => {
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
}