import React, { createContext, useContext, useEffect, useState } from 'react';

const ToggleCtx = createContext({} as any);

export default function ToggleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initial = {
    flip_all: false,
    vision_board: true,
  };
  const [states, setStates] = useState(initial);
  const setting = (val: { [key: string]: boolean }) => {
    setStates((p) => ({ ...p, ...val }));
  };
  const value = {
    states,
    setting,
  };
  return <ToggleCtx.Provider value={value}>{children}</ToggleCtx.Provider>;
}

export const useToggleCtx = () => useContext(ToggleCtx);

