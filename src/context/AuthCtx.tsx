import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../data/firebase';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from 'firebase/auth';

const AuthCtx = createContext({} as AuthCtxProp);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const Auth = getAuth();
  const [submitting, setIsSubmitting] = useState(false);
  const [currentUser, setcurrentUser] = useState<User | null>(null);
  onAuthStateChanged(Auth, (user) => {
    setcurrentUser(user);
    if (user) {
      const { uid } = user;
      console.log(uid);
    } else {
      console.log(user);
    }
  });

  const login = ({ email, password }: authProp) => {
    // setIsSubmitting(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
      })
      .catch((error) => {
        const { code, message } = error;
        console.log(error);
      });
    // setIsSubmitting(false);
  };

  const signup = ({ email, password }: authProp) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // setcurrentUser(user);
      })
      .catch((error) => {
        // const { code, message } = error;
        console.log(error);
      });
  };

  return (
    <AuthCtx.Provider
      value={{
        currentUser,
        submitting,
        setIsSubmitting,
        login,
        signup,
      }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuthCtx = () => useContext(AuthCtx);

