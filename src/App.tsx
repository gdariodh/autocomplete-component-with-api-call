import { useEffect } from 'react';
import { verifyToken } from '@/utils';
import './styles/app.css';
import { Home } from '@/pages';
import { Footer, Header } from './components';

function App() {
  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <div>
      <Header />
      <main className="page-container">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
