import { useNavigate } from 'react-router-dom';
import Navigation from '../../Components/Navigation/navigation';

function Profil() {
  const navigate = useNavigate();

  return (
    <div>
      <Navigation />
      <h1>Profil</h1>
      <button
        onClick={() => {
          navigate('/home');
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Profil;
