import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthProvider = createContext();

const auth = getAuth(app);

const AuthConText = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  //email password based authentication

  const handleCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with email and password

  const handleSignInWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google login based authentication

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //use Logout function

  const handleUserLogout = () => {
    signOut(auth)
    
      .then(() => {
        localStorage.removeItem("resaleToken")
      })
      .catch(err => console.log(err));
  };

  //handleUpdateProfile

  const handleUpdateProfile = userInfo => {
    return updateProfile(auth.currentUser, userInfo);
  };

  //watching user movement function

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    handleCreateUser,
    loading,
    handleUserLogout,
    handleGoogleLogin,
    handleUpdateProfile,
    handleSignInWithEmailAndPassword
  };

  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthConText;
