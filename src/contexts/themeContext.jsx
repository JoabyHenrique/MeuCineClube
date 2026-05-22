import { createContext, useState, useEffect } from 'react';

// Criamos o contexto do tema
export const ThemeContext = createContext();

// Criamos o Provedor (Provider) que vai envolver o nosso app
export function ThemeProvider({ children }) {
  // O estado inicia com o tema 'claro'
  const [tema, setTema] = useState('claro');

  // Função para alternar o estado do tema
  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  };

  // Toda vez que o tema mudar, aplicamos um estilo direto no body do HTML
  useEffect(() => {
    if (tema === 'escuro') {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#333333';
    }
  }, [tema]);

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}