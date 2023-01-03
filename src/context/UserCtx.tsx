import React, { createContext, useContext, useEffect, useState } from 'react';

const UserCtx = createContext({} as any);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const ls = localStorage.getItem('vision-board-auth')
    ? JSON.parse(localStorage.getItem('vision-board-auth')!)
    : null;

  const [password, setPassword] = useState(ls);

  useEffect(() => {
    setPassword(ls);
    console.log(ls);
  }, [ls]);

  const setting = (password: string) => {
    setPassword(password);
    localStorage.setItem('vision-board-auth', JSON.stringify(password));
    localStorage.setItem('vision-board-auth-seen', 'true');
  };
  const value = {
    password,
    setting,
  };
  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
}

export const useUserCtx = () => useContext(UserCtx);

