import './login.css'
import PillsFillIcon from '../../assets/pills.fill.svg?react'
import { Link } from 'react-router';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div id="login-page" className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>Mediminder</h1>
        <div id='pills-icon-container'>
          <PillsFillIcon id='pills-icon' />
        </div>
        <form className='w-100 login-form'>
          <div className="custom-input-group w-100">
            <label htmlFor="email" className="form-label">Correo</label>
            <input type="email" className="form-control" id="email" placeholder='Correo' required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="custom-input-group w-100" style={{ marginBottom: '56px' }}>
            <label htmlFor="password" className="form-label">Clave</label>
            <input type="password" className="form-control" id="password" placeholder='Clave' required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary rounded-pill align-self-center" disabled={!email || !password}>Iniciar Sesión</button>
        </form>

        <p>¿No tienes una cuenta? <Link to="/signup">Regístrate</Link></p>
        <p style={{ marginBottom: '25px' }}><Link to="/recover-password">Recuperar contraseña</Link></p>
      </div>
    </>
  );
}

export default Login;
