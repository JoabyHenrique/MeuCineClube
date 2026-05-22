import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext'; // Importamos o contexto

function Header() {
  // Consumimos as variáveis globais do tema
  const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <header style={{ 
      padding: '15px', 
      background: tema === 'claro' ? '#222' : '#333', 
      color: '#fff', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: tema === 'escuro' ? '2px solid #555' : 'none'
    }}>
      <h1>MeuCineClube</h1>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
        <Link to="/favoritos" style={{ color: '#fff', textDecoration: 'none' }}>Favoritos</Link>
        
        {/* Botão que muda o tema */}
        <button 
          onClick={alternarTema} 
          style={{ 
            padding: '5px 10px', 
            cursor: 'pointer', 
            borderRadius: '5px',
            border: 'none',
            background: tema === 'claro' ? '#fff' : '#ffa500',
            color: '#000',
            fontWeight: 'bold'
          }}
        >
          {tema === 'claro' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
        </button>
      </nav>
    </header>
  );
}

export default Header;