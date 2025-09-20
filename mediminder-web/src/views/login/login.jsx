import './login.css'
import PillsFillIcon from '../../assets/pills.fill.svg'

function Login() {
  return (
    <>
      <div className="container">
        <h1>Mediminder</h1>
        <img id='pills-icon' src={PillsFillIcon} alt='Pills Icon' />
        <p>Please log in to continue</p>
        <button className="btn btn-primary">Login</button>
      </div>
    </>
  );
}

export default Login;
