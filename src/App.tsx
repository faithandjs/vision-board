import React, { useEffect } from 'react';

import { useAuthCtx } from './context/AuthCtx';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Profile, Signup, Board, Login, ForgortPwd, Edit } from './pages';

import './App.css';

function App() {
  const location = useLocation();
  const { currentUser } = useAuthCtx();
  const navigate = useNavigate();
  const cantView = ['/profile', '/edit-board'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser && cantView.includes(location.pathname)) {
      navigate('/auth/login');
    }
  }, [location]);

  return (
    <div>
      {/* <Board /> */}
      <Routes>
        <Route path='/' element={<Board />}>
          <Route path='auth/login' element={<Login />} />
          <Route path='auth/signup' element={<Signup />} />
          <Route path='auth/forgot-password' element={<ForgortPwd />} />
          <Route path='profile' element={<Profile />} />
          <Route path='edit-board' element={<Edit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

