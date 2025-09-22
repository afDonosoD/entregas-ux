import { useState } from "react";
import "./recover-password.css";
import { useToast } from "../../hooks/useToast";
import { useNavigate } from "react-router";

function RecoverPassword() {
  const [email, setEmail] = useState("");
  const { showToast } = useToast();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del correo de recuperación
    showToast("¡Correo de recuperación enviado!", { type: "success" });
    navigate("/login");
  };

  return (
    <>
      <div
        id="recover-password-page"
        className="container d-flex flex-column justify-content-center align-items-center vh-100"
      >
        <h1 className="mb-4 mb-5">Recuperar contraseña</h1>

        <form className="login-form w-100">
          <div className="custom-input-group w-100">
            <label htmlFor="email" className="form-label">
              Correo
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Correo"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary rounded-pill align-self-center"
            disabled={!email}
            onClick={handleSubmit}
          >
            Enviar correo de recuperación
          </button>
        </form>
      </div>
    </>
  );
}

export default RecoverPassword;
