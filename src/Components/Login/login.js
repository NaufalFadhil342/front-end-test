import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput/formInput';
import axios from 'axios';

const baseUrl = 'http://34.101.70.83:5200/mobile/user/v1/auth/signin';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const Input = [
    {
      id: 1,
      type: 'text',
      name: 'username',
      placeholder: 'Username',
      label: 'Username',
      value: user.username,
      errorMessage: 'Masukkan username anda',
      required: true,
    },
    {
      id: 2,
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      label: 'Password',
      value: user.password,
      errorMessage: 'Masukkan password anda',
      required: true,
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      username: user.username,
      password: user.password,
    };

    axios({
      method: 'post',
      url: baseUrl,
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'l!nt@h-B@!k',
      },
    }).then((res) => {
      if (res.status === 200) {
        localStorage.setItem('usr-token', res.data.data.token);
        setUser(res.data);
        navigate('/home');
      }
    });
    // if (dataForm.username !== '') {
    //   const header = {
    //     'Content-Type': 'application/json',
    //     'X-API-KEY': 'l!nt@h-B@!k',
    //   };
    //   axios.post('http://34.101.70.83:5200/mobile/user/v1/auth/signin', dataForm, header);
    //   try {
    //     const response = await axios({
    //       method: 'post',
    //       url: 'http://34.101.70.83:5200/mobile/user/v1/auth/signin',
    //       header: { 'Content-Type': 'application/json', 'X-API-KEY': 'l!nt@h-B@!k' },
    //       data: dataForm,
    //     });
    //     return response;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  const onChangeData = (name, value) => {
    if (name === 'username') {
      setUser({
        ...user,
        username: value,
      });
    } else if (name === 'password') {
      setUser({
        ...user,
        password: value,
      });
    }
  };

  const formIsValid = (
    <form onSubmit={submitHandler}>
      {Input.map((input) => (
        <FormInput key={input.id} type={input.type} name={input.name} placeholder={input.placeholder} label={input.label} errorMessage={input.errorMessage} required={input.required} value={input.value} changeUser={onChangeData} />
      ))}
      <p>Lupa kata sandi?</p>
      <div className="actions">
        <button>Masuk</button>
      </div>
    </form>
  );

  return (
    <div className="login">
      <div className="title">
        <h1>ZideDesk</h1>
        <p>Masuk ke ZidDesk</p>
      </div>
      <div className="control">{formIsValid}</div>
    </div>
  );
}

export default Login;
