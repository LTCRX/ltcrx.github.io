import { useState } from 'react';
import axios from 'axios';
import './sigIn.css';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError(true);
      setErrorMessage('Por favor, insira todos os campos.');
    } else {
      try {
        const response = await axios.post(
          'https://32paa5ucoc.execute-api.us-east-1.amazonaws.com/dev/api/v1/token/',
          {
            grant_type: 'password',
            username: email, // Assuming the email is used as the username for signIn
            password: password,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        if (response.status === 200) {
          setSubmitted(true);
          setError(false);

          // Store the token in localStorage or a secure storage method of your choice
          localStorage.setItem('jwt_token', response.data.access_token);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div className="form1">
      <form className="form-login1">
        {submitted && !error && (
          <div className="success">
            <p>Login bem-sucedido!</p>
          </div>
        )}

        {error && (
          <div className="error1">
            <p>{errorMessage}</p>
          </div>
        )}

        <h1 className="h1">Login</h1>
        <p className="p1">Digite seus dados de login no campo abaixo.</p>

        <label className="label1">Email</label>
        <input onChange={handleEmail} className="input" value={email} type="email" />

        <label className="label1">Senha</label>
        <input onChange={handlePassword} className="input" value={password} type="password" />

        <button onClick={handleSubmit} className="button1" type="submit">
          ENTRAR
        </button>
      </form>
    </div>
  );
}

