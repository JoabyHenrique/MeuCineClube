import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';
import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext'; // Importamos o Provedor

function App() {
  return (
    <ThemeProvider> {/* Envolve toda a aplicação */}
      <BrowserRouter>
        <Header />
        <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;