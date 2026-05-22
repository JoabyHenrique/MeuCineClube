import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '15px', background: '#222', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>MeuCineClube</h1>
      <nav>
        <Link to="/" style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}>Home</Link> | 
        <Link to="/login" style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}>Login</Link> | 
        <Link to="/favoritos" style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}>Favoritos</Link>
      </nav>
    </header>
  );
}
export default Header;