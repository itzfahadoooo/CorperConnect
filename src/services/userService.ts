// services/userService.js
import { setDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase"; // path to your firebase.js

interface User {
    uid: string;
    email: string;
    name: string;

}

export async function saveUserDetailsToFirestore(
    user: User,
    name: string,
    phoneNumber: string,
    role: string
): Promise<void> {
    await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        name,
        phoneNumber,
        role,
        createdAt: serverTimestamp()
    });
}

export async function getUserDetails(uid: string): Promise<UserDetails | null> {
    const docSnap = await getDoc(doc(db, "users", uid));
    if (docSnap.exists()) {
        return docSnap.data() as UserDetails;
    } else {
        console.log("No such user!");
        return null;
    }
}

export interface UserDetails {
    uid: string;
    email: string;
    name: string;
    phoneNumber: string;
    role: string;
}
