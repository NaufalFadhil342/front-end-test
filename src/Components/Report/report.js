import { useNavigate } from 'react-router-dom';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CommentIcon from '@mui/icons-material/Comment';

function Report() {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="reportComplain"
        onClick={() => {
          navigate('/report');
        }}
      >
        <EngineeringIcon />
        <p>Lapor Keluhan</p>
      </button>
      <button
        className="myComplain"
        onClick={() => {
          navigate('/myComplaint');
        }}
      >
        <CommentIcon />
        <p>Keluhan Saya</p>
      </button>
    </>
  );
}

export default Report;
