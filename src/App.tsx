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
  // console.log(currentUser, currentUser ? '<Home /> ' : ' <Login />');

  return (
    <div>
      {currentUser ? <Home /> : <Login />}
      <Login />
    </div>
  );
}

export default App;

