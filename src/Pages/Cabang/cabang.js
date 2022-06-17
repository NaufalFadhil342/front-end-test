import { useNavigate } from 'react-router-dom';
import Navigation from '../../Components/Navigation/navigation';

function Cabang() {
  const navigate = useNavigate();

  return (
    <div>
      <Navigation />
      <h1>Cabang</h1>
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

export default Cabang;
