import React, { useEffect } from 'react';
import Home from './pages/Home';

import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

