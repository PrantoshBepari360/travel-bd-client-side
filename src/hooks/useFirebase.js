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

  const auth = getAuth();

  const signInWithGoogle = () => {
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
      });
      return () => unsubscribe;
  }, [auth]);

  const logOut = () => {
    signOut(auth).then((result) => {});
  };

  return {
    user,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
