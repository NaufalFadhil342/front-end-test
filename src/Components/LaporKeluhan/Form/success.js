import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

function Success(props) {
  const navigate = useNavigate();

  return (
    <div className="success">
      <div className="content">
        <SendIcon />
        <p>{props.message}</p>
        <div className="actions">
          <button
            onClick={() => {
              navigate('/myComplaint');
            }}
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
