import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';
import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext'; // Importamos o novo provedor

function App() {
  return (
    <ThemeProvider>
      <AuthProvider> {/* Adicionado aqui envolvendo as rotas */}
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
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;