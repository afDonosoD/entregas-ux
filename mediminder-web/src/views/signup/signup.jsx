import { Link } from 'react-router';
import './signup.css';
import { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send to dashboard
  }

  return (
    <>
      <div id='signup-page' className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>Registro de doctor</h1>
        <form className='w-100 signup-form'>
          <div className="custom-input-group w-100">
            <label htmlFor="email" className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder='Correo'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="custom-input-group w-100">
            <label htmlFor="password" className="form-label">Clave</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder='Clave'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="custom-input-group w-100">
            <label htmlFor="name" className="form-label">Nombres</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder='Nombre'
              required
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="custom-input-group w-100">
            <label htmlFor="lastName" className="form-label">Apellidos</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder='Apellidos'
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary rounded-pill align-self-center" disabled={!email || !password || !name || !lastName} onClick={handleSubmit}>Crear cuenta</button>
        </form>

        <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
      </div>
    </>
  );
}

export default Signup;
