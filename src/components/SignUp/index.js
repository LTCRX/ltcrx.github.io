import { useState } from 'react';
import axios from 'axios';
import './SignUp.css'

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

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
  
    if (name === '' || email === '' || password === '') {
      setError(true);
      setErrorMessage('Por favor insira todos os campos.');
    } else {
      try {
        const response = await axios.post(
          'https://32paa5ucoc.execute-api.us-east-1.amazonaws.com/dev/api/v1/users/',
          {
            username: name,
            email: email,
            password: password,
          }
        );
  
        if (response.status === 200) {
            setSubmitted(true);
            setError(false);
          } else {
            setError(true);
          }
        } catch (error) {
  
          if (error.response && error.response.status === 406) {
            setError(true);
            setErrorMessage('Nome de usuário ou e-mail já em uso. Escolha credenciais diferentes.');
          } else if (error.response && error.response.status === 422) {
            setError(true);
            setErrorMessage('Oops! Parece que houve um problema com os dados fornecidos. \n sPor favor, verifique se todas as informações estão corretas e tente novamente.');
          }
        }
      }
    };
  
  
  return (
    <div className="form">
    
      

      <form className='form-login'>
          
      {submitted && !error && (
        <div className="success">
          <p>Usuário {name} registrado com sucesso!!</p>
        </div>
      )}

      {error && (
        <div className="error">
        <p>{errorMessage}</p>
        </div>
      )}

      <h1 className='h1'>Registro</h1>
      <p className='p'>Digite os seus dados de registro no campo abaixo.</p>
      
      <label className="label">Nome</label>
        <input onChange={handleName} className="input" value={name} type="text" />

        <label className="label">Email</label>
        <input onChange={handleEmail} className="input" value={email} type="email" />

        <label className="label">Senha</label>
        <input onChange={handlePassword} className="input" value={password} type="password" />

        <button onClick={handleSubmit} className="button" type="submit">
          REGISTRAR
        </button>
      </form>
    </div>
  );
}