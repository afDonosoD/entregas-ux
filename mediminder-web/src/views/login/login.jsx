import './login.css'
import PillsFillIcon from '../../assets/pills.fill.svg?react'

function Login() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className='d-flex flex-column align-items-center'>
        <h1>Mediminder</h1>
          <PillsFillIcon id='pills-icon' />
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo</label>
              <input type="email" className="form-control" id="email" placeholder='Correo' />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Clave</label>
              <input type="password" className="form-control" id="password" placeholder='Clave' />
            </div>
            <button type="submit" className="btn btn-primary rounded-pill w-100">Iniciar Sesión</button>
          </form>

          <p>¿No tienes una cuenta? Regístrate</p>
          <p>Recuperar contraseña</p>
        </div>
      </div>
    </>
  );
}

export default Login;
