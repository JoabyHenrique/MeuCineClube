import { createContext, useState, useEffect } from 'react';

// Criamos o contexto de autenticação
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Inicializamos o estado buscando o usuário direto do localStorage se houver
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem('@MeuCineClube:usuario');
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  // Função de Login que recebe o nome digitado
  const login = (nome) => {
    const dadosUsuario = { nome };
    setUsuario(dadosUsuario);
  };

  // Função de Logout para limpar a sessão
  const logout = () => {
    setUsuario(null);
  };

  // Efeito para sincronizar as mudanças de 'usuario' com o localStorage
  useEffect(() => {
    if (usuario) {
      localStorage.setItem('@MeuCineClube:usuario', JSON.stringify(usuario));
    } else {
      localStorage.removeItem('@MeuCineClube:usuario');
    }
  }, [usuario]);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}