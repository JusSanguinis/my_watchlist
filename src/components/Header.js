import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">İzlenecekler</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/watched">İzlenenler</Link>
            </li>
            <li>
              <i className="fas fa-plus"></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;