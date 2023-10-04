import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Login User
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Log Out
  const logOut = () => {
    return signOut(auth);
  }

  // Observer
  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    }
  }, []);

  const authValue = {
    user,
    loading,
    googleLogin,
    createUser,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

AuthProvider.propTypes = {
  children: PropTypes.node
}