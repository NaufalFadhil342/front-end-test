import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import axios from 'axios';

function DetailKeluhan() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dataTiket, setDataTiket] = useState();
  const baseUrl = 'http://34.101.70.83:5200/mobile/user/v1/ticket/';
  const bearer = `Bearer ${localStorage.getItem('usr-token')}`;
  useEffect(() => {
    axios({
      method: 'get',
      url: baseUrl,
      params: {
        _id: id,
      },
      headers: {
        Authorization: bearer,
        'Content-Type': 'application/json',
        'X-API-KEY': 'l!nt@h-B@!k',
      },
    }).then((res) => {
      if (res.status === 200) {
        setDataTiket(res.data.data);
      }
    });
  }, [bearer, id]);

  const telepon = () => {
    navigate('/home');
  };

  const whatsapp = () => {
    navigate('/home');
  };

  return (
    <div className="detail">
      <h1>Detail Keluhan</h1>
      <div className="headerContent">
        <img width="100%" src={dataTiket?.image_url} alt="" />
        <div className="desc">
          <div className="desc_component">
            <h3>Keluhan</h3>
            <p>{dataTiket?.title}</p>
          </div>
          <hr />
          <div className="desc_component">
            <h3>Deskripsi</h3>
            <p>{dataTiket?.description}</p>
          </div>
          <hr />
          <div className="desc_component">
            <h3>Kategori</h3>
            <p>{dataTiket?.category}</p>
          </div>
          <hr />
          <div className="desc_component">
            <h3>Status</h3>
            <p style={{ color: '#f5ba46' }}>{dataTiket?.status === 'waiting' ? 'menunggu' : '-'}</p>
          </div>
          <hr />
          <div className="desc_component">
            <h3>Konsultasi Via</h3>
            <div className="callActions">
              <button type="button" onClick={telepon}>
                <CallIcon />
                Panggil
              </button>
              <button type="button" onClick={whatsapp}>
                <WhatsAppIcon />
                Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailKeluhan;
