import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } else {
              setUser({});
          }
          setIsLoading(false);
      });
      return () => unsubscribe;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
    .then((result) => {})
    .finally(() => setIsLoading(false));
  };

  return {
    isLoading,
    setIsLoading,
    user,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
