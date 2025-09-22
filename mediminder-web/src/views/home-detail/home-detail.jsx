import "./home-detail.css";
import { useNavigate } from "react-router";
import { useToast } from "../../hooks/useToast";
import { useState } from "react";
import MedicationCreate from "../medication-create/medication-create";
import PillFillIcon from "../../assets/pill.fill.svg?react";
import MedicationDetail from "../medication-detail/medication-detail";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function HomeDetail() {
  const { showToast } = useToast();
  const [cc, setCC] = useState("");
  let navigate = useNavigate();
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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
          id="home-detail-page"
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
                  +
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
                  style={{ color: "black" }}
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
              <div class="col-2">
                <Doughnut data={data} />
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
                <div
                  className="d-flex justify-content-between align-items-center primary-button-border mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#medication-detail"
                >
                  <div className="pill-info d-flex flex-row align-items-center m-2">
                    <div className="icon-background d-inline-flex justify-content-center align-items-center bg-primary">
                      <PillFillIcon width="16px" height="16px" />
                    </div>

                    <div className="align-items-start d-flex flex-column">
                      <p className="modal-title" style={{ color: "black" }}>
                        <b>Acetaminofén</b>
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        1 pastilla
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        9:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 border-blue-left">
                <p class="p-0 m-0">15</p>
                <div
                  className="d-flex justify-content-between align-items-center primary-button-border mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#medication-detail"
                >
                  <div className="pill-info d-flex flex-row align-items-center m-2">
                    <div className="icon-background d-inline-flex justify-content-center align-items-center bg-primary">
                      <PillFillIcon width="16px" height="16px" />
                    </div>

                    <div className="align-items-start d-flex flex-column">
                      <p className="modal-title" style={{ color: "black" }}>
                        <b>Acetaminofén</b>
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        1 pastilla
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        9:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 border-blue-left">
                <p class="p-0 m-0">16</p>
                <div
                  className="d-flex justify-content-between align-items-center primary-button-border mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#medication-detail"
                >
                  <div className="pill-info d-flex flex-row align-items-center m-2">
                    <div className="icon-background d-inline-flex justify-content-center align-items-center bg-primary">
                      <PillFillIcon width="16px" height="16px" />
                    </div>

                    <div className="align-items-start d-flex flex-column">
                      <p className="modal-title" style={{ color: "black" }}>
                        <b>Acetaminofén</b>
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        1 pastilla
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        9:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 border-blue-left">
                <p class="p-0 m-0">17</p>
                <div
                  className="d-flex justify-content-between align-items-center primary-button-border mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#medication-detail"
                >
                  <div className="pill-info d-flex flex-row align-items-center m-2">
                    <div className="icon-background d-inline-flex justify-content-center align-items-center bg-primary">
                      <PillFillIcon width="16px" height="16px" />
                    </div>

                    <div className="align-items-start d-flex flex-column">
                      <p className="modal-title" style={{ color: "black" }}>
                        <b>Acetaminofén</b>
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        1 pastilla
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        9:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 border-blue-left">
                <p class="p-0 m-0">18</p>
                <div
                  className="d-flex justify-content-between align-items-center primary-button-border mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#medication-detail"
                >
                  <div className="pill-info d-flex flex-row align-items-center m-2">
                    <div className="icon-background d-inline-flex justify-content-center align-items-center bg-primary">
                      <PillFillIcon width="16px" height="16px" />
                    </div>

                    <div className="align-items-start d-flex flex-column">
                      <p className="modal-title" style={{ color: "black" }}>
                        <b>Acetaminofén</b>
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        1 pastilla
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        9:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 border-blue-left border-blue-right">
                <p class="p-0 m-0">19</p>
                <div
                  className="d-flex justify-content-between align-items-center primary-button-border mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#medication-detail"
                >
                  <div className="pill-info d-flex flex-row align-items-center m-2">
                    <div className="icon-background d-inline-flex justify-content-center align-items-center bg-primary">
                      <PillFillIcon width="16px" height="16px" />
                    </div>

                    <div className="align-items-start d-flex flex-column">
                      <p className="modal-title" style={{ color: "black" }}>
                        <b>Acetaminofén</b>
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        1 pastilla
                      </p>
                      <p
                        className="modal-title small-text"
                        style={{ color: "black" }}
                      >
                        9:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MedicationDetail
        name="Acetaminofén"
        dosage="1 pastilla"
        schedule={[
          { time: "9:00 a.m.", days: ["L", "M", "M", "J", "V"] },
          { time: "10:00 a.m.", days: ["S", "D"] },
        ]}
      />
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

export default HomeDetail;
