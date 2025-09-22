import "./home.css";
import { useNavigate } from "react-router";
import { useToast } from "../../hooks/useToast";
import { useState } from "react";
import MedicationCreate from "../medication-create/medication-create";

function Home() {
  const { showToast } = useToast();
  const [cc, setCC] = useState("");
  let navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();

    showToast("¡Cierre de sesión exitoso!", { type: "success" });
    navigate("/login");
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column vh-100 m-0 p-0">
        <nav class="navbar bg-primary navbar-expand-lg">
          <div class="container-fluid">
            <a
              class="navbar-brand text-color-white font-weight-600"
              href="/home"
            >
              Mediminder
            </a>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <a
                class="navbar-text text-color-white text-decoration-none"
                href=""
                onClick={handleSignOut}
              >
                Cerrar sesión
              </a>
            </div>
          </div>
        </nav>
        <div
          id="home-page"
          className="container-fluid d-flex flex-column vh-100"
        >
          <div class="row mt-1">
            <div class="col-2">
              <p style={{ fontWeight: 700 }} class="mt-3">
                Paciente
              </p>
            </div>
            <div class="col-8"></div>
            <div class="col-2 d-grid">
              <button
                type="button"
                class="btn primary-bg primary-button-border d-flex align-items-center justify-content-center gap-2"
                data-bs-toggle="modal"
                data-bs-target="#medication-create"
              >
                <div class="circle-icon d-flex justify-content-center align-items-center">
                  <i class="bi bi-plus"></i>
                </div>
                <div class="reminder-text">Crear recordatorio</div>
              </button>
            </div>
          </div>
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-2">
                <p class="p-0 m-0">C.C.</p>
                <input
                  type="text"
                  class="form-control active-input"
                  placeholder="1234567890"
                  value={cc}
                  required
                  onChange={(e) => setCC(e.target.value)}
                />
              </div>
              <div class="col-2">
                <p class="p-0 m-0">Nombre completo</p>
                <input
                  type="text"
                  class="form-control disabled-input"
                  placeholder="Mary Díaz"
                  disabled
                  onChange={(e) => setCC(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div class="container-fluid p-0 mt-2">
            <div class="row">
              <div class="col-4">
                <p class="p-0 m-0">Medicina</p>
                <select
                  class="form-select select-medicine"
                  aria-label="Default select example"
                >
                  <option selected>Todas</option>
                  <option value="1">Acetaminofén</option>
                  <option value="2">Dolex</option>
                  <option value="3">Aspirina</option>
                </select>
              </div>
            </div>
          </div>

          <h1 style={{ color: "black", marginTop: "30px" }}>Septiembre</h1>
          <div class="container-fluid text-center p-0 mt-4 container-calendar">
            <div class="row row-calendar">
              <div class="col-2 border-blue-left">
                <p class="p-0 m-0">14</p>
              </div>
              <div class="col-2 border-blue-left">
                <p class="p-0 m-0">15</p>
              </div>
              <div class="col-2 border-blue-left">
                <p class="p-0 m-0">16</p>
              </div>
              <div class="col-2 border-blue-left">
                <p class="p-0 m-0">17</p>
              </div>
              <div class="col-2 border-blue-left">
                <p class="p-0 m-0">18</p>
              </div>
              <div class="col-2 border-blue-left border-blue-right">
                <p class="p-0 m-0">19</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MedicationCreate
        name="Acetaminofén"
        dosage="1 pastilla"
        schedule={[
          { time: "9:00 a.m.", days: ["L", "M", "M", "J", "V"] },
          { time: "10:00 a.m.", days: ["S", "D"] },
        ]}
      />
    </>
  );
}

export default Home;
