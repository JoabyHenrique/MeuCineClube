# MeuCineClube

Uma Single Page Application (SPA) desenvolvida em React para catalogação e gestão de filmes favoritos. O projeto simula o consumo de uma API de cinema, possui um sistema de autenticação, proteção de rotas privadas e alternância dinâmica de temas visuais.

#Tecnologias Aplicadas
* React (v18+) com **Vite** para um ecossistema rápido de desenvolvimento.
* React Router Dom** (v6+) para gestão de rotas e navegação instantânea (SPA).
* React Context API** para partilha de estados globais de forma otimizada.
* HTML5 / CSS3 com variáveis de ambiente nativas para estilização responsiva.
* LocalStorage para persistência local de dados.



#Conceitos Estruturais Implementados
O projeto foi modularizado seguindo as diretrizes académicas, dividindo as responsabilidades nas seguintes estruturas:
1. `src/contexts/ThemeContext.jsx`: Gere a alternância do tema Claro/Escuro injetado no `body` global.
2. `src/contexts/AuthContext.jsx`: Controla o estado de login simulado do utilizador e persiste a sessão.
3. `src/contexts/FavoritosContext.jsx`: Administra a lista global de filmes favoritados e evita duplicados.
4. `src/routes/RotaProtegida.jsx`: Componente de segurança (Guarda de Rotas) que impede acessos anónimos à área de favoritos através do `<Outlet />`.

---

#Como Executar o Projeto Localmente

Se desejar clonar e correr este projeto no seu computador, siga os passos abaixo no terminal:

1. Clonar o repositório:
   ```bash
   git clone [https://github.com/JoabyHenrique/MeuCineClube.git](https://github.com/JoabyHenrique/MeuCineClube.git)
