import React, { createContext, useContext, useEffect, useState } from 'react';

const ToggleCtx = createContext({} as any);

export default function ToggleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initial: toggleCtxProps = localStorage.getItem('vision-board-states')
    ? JSON.parse(localStorage.getItem('vision-board-states')!)
    : {
        flip_all: false,
        vision_board: true,
      };
  const [states, setStates] = useState({
    flip_all: false,
    vision_board: true,
  });
  const { flip_all, vision_board } = states;

  useEffect(() => {
    if (vision_board && flip_all) setStates((p) => ({ ...p, flip_all: false }));
    localStorage.setItem('vision-board-states', JSON.stringify(states));
  }, [states]);

  const setting = (val: { [key: string]: boolean }) => {
    setStates((p) => ({ ...p, ...val }));
    localStorage.setItem('vision-board-states', JSON.stringify(states));
  };
  const value = {
    states,
    setting,
  };
  return <ToggleCtx.Provider value={value}>{children}</ToggleCtx.Provider>;
}

export const useToggleCtx = () => useContext(ToggleCtx);

