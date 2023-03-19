import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { LoadingOverlay } from '@mantine/core';

import { useAuthCtx } from './context/AuthCtx';

import {
  Profile,
  Signup,
  Board,
  Login,
  ForgortPwd,
  Edit,
  Settings,
} from './pages';

import './App.css';

function App() {
  const location = useLocation();
  const { currentUser } = useAuthCtx();
  const navigate = useNavigate();
  const cantView = ['/profile', '/edit-board'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(currentUser?.email);
  useEffect(() => {
    if (currentUser === null && cantView.includes(location.pathname))
      navigate('/auth/login');
  }, [location]);

  return (
    <div>
      {/* <Board /> */}
      {currentUser === undefined && cantView.includes(location.pathname) ? (
        <LoadingOverlay visible={true} overlayBlur={2} />
      ) : (
        <></>
      )}{' '}
      <Routes>
        <Route path='/' element={<Board />}>
          <Route path='vision-board' element={<Board />} />
          <Route path='auth/login' element={<Login />} />
          <Route path='auth/signup' element={<Signup />} />
          <Route path='auth/forgot-password' element={<ForgortPwd />} />
        </Route>
        <Route path='edit-board' element={<Edit />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;

