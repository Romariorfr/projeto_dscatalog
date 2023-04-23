import './styles.css';

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <a href="/admin/products" className='admin-nav-item active'>
            <p>Produtos</p>
          </a>
        </li>
        <li>
          <a href="/admin/categories" className='admin-nav-item'>
            <p>Categorias</p>
          </a>
        </li>
        <li>
          <a href="/admin/users" className='admin-nav-item'>
            <p>Usuários</p> 
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
