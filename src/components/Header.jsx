import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to={'main'}>
        <img
          style={{ maxWidth: '150px' }}
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        />
      </Link>
    </header>
  );
};

export default Header;