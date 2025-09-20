import './login.css'
import PillsFillIcon from '../../assets/pills.fill.svg?react'
import { Link } from 'react-router';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>Mediminder</h1>
        <PillsFillIcon id='pills-icon' />
        <form className='w-100 login-form'>
          <div className="custom-input-group w-100">
            <label htmlFor="email" className="form-label">Correo</label>
            <input type="email" className="form-control" id="email" placeholder='Correo' required />
          </div>
          <div className="custom-input-group w-100" style={{ marginBottom: '56px' }}>
            <label htmlFor="password" className="form-label">Clave</label>
            <input type="password" className="form-control" id="password" placeholder='Clave' required />
          </div>
          <button type="submit" className="btn btn-primary rounded-pill align-self-center" disabled>Iniciar Sesión</button>
        </form>

        <p>¿No tienes una cuenta? <Link to="/signup">Regístrate</Link></p>
        <p style={{ marginBottom: '25px' }}><Link to="/reset-password">Recuperar contraseña</Link></p>
      </div>
    </>
  );
}

export default Login;
