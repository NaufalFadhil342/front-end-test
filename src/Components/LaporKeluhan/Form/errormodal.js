import React from 'react';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';

function Errormodal(props) {
  return (
    <div className="error">
      <div className="content">
        <SmsFailedIcon />
        <p>{props.message}</p>
        <div className="actions">
          <button
            onClick={() => {
              props.closeMode();
            }}
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}

export default Errormodal;
