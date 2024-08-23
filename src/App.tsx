import React, { useEffect } from 'react';
import { verifyToken } from '@/utils';
import { Home } from '@/pages';

function App() {
  useEffect(() => {
    verifyToken();
  }, []);

  return <Home />;
}

export default App;
