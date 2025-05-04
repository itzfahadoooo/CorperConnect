import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { getUserDetails, UserDetails } from "@/services/userService";

interface UserContextType {
  firebaseUser: FirebaseUser | null;
  userData: UserDetails | null;
  loading: boolean;
}

const UserContext = createContext<UserContextType>({
  firebaseUser: null,
  userData: null,
  loading: true,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      if (user) {
        getUserDetails(user.uid)
          .then((data) => {
            setUserData(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching user data: ", error);
            setUserData(null);
            setLoading(false);
          });
      } else {
        setUserData(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ firebaseUser, userData, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
