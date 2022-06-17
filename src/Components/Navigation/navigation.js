import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Navigation() {
  return (
    <nav>
      <li>
        <Link to="/home">
          <HomeIcon />
          <p>Beranda</p>
        </Link>
        <Link to="/branch">
          <BusinessIcon />
          <p>Cabang</p>
        </Link>
        <Link to="/profile">
          <PersonOutlineIcon />
          <p>Profil</p>
        </Link>
      </li>
    </nav>
  );
}

export default Navigation;
