import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function KeluhanSaya() {
  const navigate = useNavigate();
  const [dataTiket, setDataTiket] = useState();
  const baseUrl = 'http://34.101.70.83:5200/mobile/user/v1/ticket/';
  const bearer = `Bearer ${localStorage.getItem('usr-token')}`;
  useEffect(() => {
    axios({
      method: 'get',
      url: baseUrl,
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
  }, [bearer]);

  return (
    <div className="myComplaint">
      <h1>Keluhan Saya</h1>
      <div className="preview">
        <button>Semua</button>
        <button id="disabled">Menunggu</button>
        <button id="disabled">Dalam Konsultasi</button>
      </div>
      {dataTiket?.map((item) => (
        <div
          className="desc"
          onClick={() => {
            navigate(`/detailComplaint/${item._id}`);
          }}
          key={item._id}
        >
          <img width="100%" src={item.image_url} alt="/" />
          <div className="schedule">
            <p>{item.status}</p>
            <div className="data">
              <li>{item.category}</li>
              <li>-</li>
            </div>
          </div>
          <div className="desc_option">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KeluhanSaya;
