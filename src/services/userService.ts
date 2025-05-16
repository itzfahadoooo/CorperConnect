// services/userService.js
import { setDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase"; // path to your firebase.js

// interface User {
//     uid: string;
//     email: string;
//     name: string;

// }

export async function saveUserDetailsToFirestore(userDetails: UserDetails): Promise<void> {
  const { uid } = userDetails;

  await setDoc(doc(db, "users", uid), {
    ...userDetails,
    createdAt: serverTimestamp(),
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
  fullName: string;
  dateOfBirth?: Date;
  gender: string;
  maritalStatus: string;
  placeOfBirth: string;
  nationality: string;
  stateOfOrigin: string;
  lga: string;
  residentialAddress: string;
  languagesSpoken: string;
  institutionAttended: string;
  courseOfStudy: string;
  createdAt: import("firebase/firestore").Timestamp; // Firestore timestamp
}
