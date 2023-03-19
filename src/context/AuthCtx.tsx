import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { ref, onValue, set } from 'firebase/database';

import { auth, database } from '../data/firebase';
import { test } from '../data/data';

const AuthCtx = createContext({} as AuthCtxProp);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setcurrentUser] = useState<User | null | undefined>();
  const [board, setBoard] = useState(test);

  const getData = () => {
    const userBoardData = ref(database, 'users/' + currentUser?.uid);
    onValue(userBoardData, (snapshot) => {
      const data = snapshot.val();
      if (data && currentUser) {
        setBoard(data);
        console.log(data);
        if (data.title) document.title = data.title;
      }
    });
  };

  useEffect(() => {
    document.title = board.title;
    onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
      // const defaultTitle = user?.displayName
      //   ? user?.displayName + "'s vision board"
      //   : 'My vision board';
      // document.title = defaultTitle;
    });
  }, []);

  useEffect(() => {
    if (currentUser) getData();
  }, [currentUser]);

  return (
    <AuthCtx.Provider
      value={{
        currentUser,
        board,
        setBoard,
      }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuthCtx = () => useContext(AuthCtx);

