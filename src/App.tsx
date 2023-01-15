import React, { useEffect } from 'react';

import { useAuthCtx } from './context/AuthCtx';
import Login from './pages/Auth/login';
import Home from './pages/Home';

import './App.css';

function App() {
  const { currentUser } = useAuthCtx();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(currentUser);
  return <div>{currentUser ? <Home /> : <Login />}</div>;
}

export default App;

