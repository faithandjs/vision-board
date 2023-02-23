import React, { createContext, useContext, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

import { auth } from '../data/firebase';
import { test } from '../data';

const AuthCtx = createContext({} as AuthCtxProp);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const Auth = getAuth();
  const [currentUser, setcurrentUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (user) => {
    setcurrentUser(user);
  });

  return (
    <AuthCtx.Provider
      value={{
        currentUser,
        setcurrentUser,
        board: test,
      }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuthCtx = () => useContext(AuthCtx);

