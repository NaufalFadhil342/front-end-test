import React, { useState } from 'react';
import DropdownMenu from '../Dropdown/dropdownMenu';
import Errormodal from './errormodal';
import Success from './success';
import Image from './Images/image';
import axios from 'axios';

const baseUrl = 'http://34.101.70.83:5200/mobile/user/v1/ticket/';

function Form() {
  const [payload, setPayload] = useState({
    file: '',
    files: '',
    title: '',
    category: '',
    description: '',
  });

  const [success, setSuccess] = useState({
    status: false,
    message: '',
  });
  const [error, setError] = useState();

  const addComplaint = (event) => {
    event.preventDefault();
    if (payload.file === '' || payload.title === '' || payload.category === '' || payload.description !== '') {
      setError({
        message: 'Data form tidak boleh ada yang kosong.',
      });
    }

    const data = {
      title: payload.title,
      category: payload.category,
      image: payload.files,
      description: payload.description,
    };

    const bearer = `Bearer ${localStorage.getItem('usr-token')}`;

    axios({
      method: 'post',
      url: baseUrl,
      data: data,
      headers: {
        Authorization: bearer,
        'X-API-KEY': 'l!nt@h-B@!k',
      },
    }).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setSuccess({
          status: true,
          message: 'Request kamu telah dikirim harap menunggu balasan dari kami',
        });
      } else {
        setError({
          message: 'Request tidak terkirim karena terjadi kesalahan. Silahkan hubungi kami.',
        });
      }
    });
  };

  const closeErrorMode = () => {
    setError();
  };

  const onChangeData = (name, value) => {
    if (name === 'imageFile') {
      setPayload({
        ...payload,
        file: value,
      });
    } else if (name === 'imageFiles') {
      setPayload({
        ...payload,
        files: value,
      });
    } else if (name === 'title') {
      setPayload({
        ...payload,
        title: value,
      });
    } else if (name === 'category') {
      setPayload({
        ...payload,
        category: value,
      });
    } else if (name === 'description') {
      setPayload({
        ...payload,
        description: value,
      });
    }
  };

  return (
    <div>
      {error && <Errormodal closeMode={closeErrorMode} message={error.message} />}
      {success.status && <Success message={success.message} />}
      <div className="keluhan">
        <h1>Lapor Keluhan</h1>
        <div className="content">
          <form onSubmit={addComplaint}>
            <div className="foto">
              <h3>Foto Keluhan</h3>
              <Image name="imageFile" changeData={onChangeData} value={payload.file} />
            </div>
            <div className="title">
              <h3>Apa Keluhanmu?</h3>
              <input type="text" placeholder="Judul Keluhan" value={payload.title} onChange={(e) => onChangeData('title', e.target.value)} />
            </div>
            <div>
              <DropdownMenu changeData={onChangeData} />
            </div>
            <div className="desc">
              <h3>Deskripsikan Keluhanmu</h3>
              <textarea rows="5" placeholder="Deskripsikan keluhanmu" value={payload.description} onChange={(e) => onChangeData('description', e.target.value)} />
            </div>
            <div className="kirim">
              <button type="submit">Kirim</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
