import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext'; // Importamos o contexto de autenticação

function Header() {
  const { tema, alternarTema } = useContext(ThemeContext);
  const { usuario, logout } = useContext(AuthContext); // Consumimos o usuário e o logout

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
      <div>
        <h1>MeuCineClube</h1>
        {usuario && <span style={{ fontSize: '14px', color: '#aaa' }}>Olá, <strong>{usuario.nome}</strong>! 👋</span>}
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        
        {!usuario ? (
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
        ) : (
          <button onClick={logout} style={{ background: 'none', border: 'none', color: '#ff6b6b', cursor: 'pointer', fontSize: '16px' }}>Sair</button>
        )}
        
        <Link to="/favoritos" style={{ color: '#fff', textDecoration: 'none' }}>Favoritos</Link>
        
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