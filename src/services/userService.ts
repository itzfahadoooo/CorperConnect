// services/userService.js
import { setDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase"; // path to your firebase.js

interface User {
    uid: string;
    email: string;
}

export async function saveUserDetailsToFirestore(
    user: User,
    fullName: string,
    phoneNumber: string,
    role: string
): Promise<void> {
    await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        fullName,
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

interface UserDetails {
    uid: string;
    email: string;
    fullName: string;
    phoneNumber: string;
    role: string;
}
