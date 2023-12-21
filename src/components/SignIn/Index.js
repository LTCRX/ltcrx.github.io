import { useState } from 'react';
import axios from 'axios';
import './style.css';

export default function LoginForm() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLoginUsername = (e) => {
    setLoginUsername(e.target.value);
  };

  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://32paa5ucoc.execute-api.us-east-1.amazonaws.com/dev/api/v1/token',
        new URLSearchParams({
          grant_type: 'password',
          username: loginUsername,
          password: loginPassword,
          scope: '',
          client_id: '',  // Substitua pelo seu client_id
          client_secret: '',  // Substitua pelo seu client_secret
        }).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const token = response.data.access_token;
      console.log('Token de acesso (JWT):', token);
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    }
  };

  return (
    <form className='form-login'>
      <h1 className='h1'>Login</h1>
      <p className='p'>Digite os seus dados de login no campo abaixo.</p>

      <label className="label">Username</label>
      <input onChange={handleLoginUsername} className="input" value={loginUsername} type="text" />

      <label className="label">Senha</label>
      <input onChange={handleLoginPassword} className="input" value={loginPassword} type="password" />

      <button onClick={handleLoginSubmit} className="button" type="submit">
        LOGIN
      </button>
    </form>
  );
}
