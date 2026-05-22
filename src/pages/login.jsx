import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const [nomeInput, setNomeInput] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomeInput.trim() === '') {
      alert('Por favor, digite seu nome!');
      return;
    }
    
    // Executa a função global de login do contexto
    login(nomeInput);
    
    // Redireciona o usuário de volta para a Home após logar
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Identifique-se no MeuCineClube</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span>Nome de Usuário:</span>
          <input 
            type="text" 
            value={nomeInput}
            onChange={(e) => setNomeInput(e.target.value)}
            placeholder="Digite seu nome..."
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #aaa', color: '#000' }}
          />
        </label>
        <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Entrar no Clube
        </button>
      </form>
    </div>
  );
}

export default Login;