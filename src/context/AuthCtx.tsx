import React, { createContext, useContext, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

import { auth } from '../data/firebase';

const AuthCtx = createContext({} as AuthCtxProp);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const Auth = getAuth();
  const [currentUser, setcurrentUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (user) => {
    setcurrentUser(user);
  });
  // GET USERS PROFILE
  // const user = Auth.currentUser;
  // if (user !== null) {
  //   setUserData(user)
  //   // The user object has basic properties such as display name, email, etc.
  //   const displayName = user.displayName;
  //   const email = user.email;
  //   const photoURL = user.photoURL;
  //   const emailVerified = user.emailVerified;

  //   // The user's ID, unique to the Firebase project. Do NOT use
  //   // this value to authenticate with your backend server, if
  //   // you have one. Use User.getToken() instead.
  //   const uid = user.uid;
  // }
  return (
    <AuthCtx.Provider
      value={{
        currentUser,
        setcurrentUser,
      }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuthCtx = () => useContext(AuthCtx);

