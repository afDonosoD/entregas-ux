import { useNavigate } from "react-router";
import PillFillIcon from "../../assets/pill.fill.svg?react";
import "./medication-create.css";

function MedicationCreate({ schedule = [] }) {
  let navigate = useNavigate();

  const handleDetail = (e) => {
    e.preventDefault();

    navigate("/home-detail");
  };

  return (
    <div className="modal fade" tabIndex="-1" id="medication-create">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="pill-info d-flex flex-row align-items-center">
                <h1 className="modal-title" style={{ color: "black" }}>
                  Crear recordatorio
                </h1>
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <p class="mt-3">
              <b>Paciente: </b> Mary Díaz
            </p>

            <h2>
              <b>Nombre de la medicina</b>
            </h2>
            <div class="container-fluid p-0">
              <div class="row">
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control active-input"
                    placeholder="Eg. acetaminofén"
                    required
                  />
                </div>
              </div>
            </div>

            <h2>
              <b>Cantidad</b>
            </h2>
            <div class="container-fluid p-0">
              <div class="row">
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control active-input"
                    placeholder="E.g. 1, 5, 100"
                    required
                  />
                </div>
              </div>
            </div>

            <h2>
              <b>Medida</b>
            </h2>
            <div class="container-fluid p-0">
              <div class="row">
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control active-input"
                    placeholder="E.g. pastillas, gotas, mL"
                    required
                  />
                </div>
              </div>
            </div>

            <h2>
              <b>Horario</b>
            </h2>
            <table>
              <thead>
                <tr>
                  <th style={{ paddingBottom: "10px" }} scope="col">
                    Hora
                  </th>
                  <th
                    style={{ paddingBottom: "10px", paddingLeft: "10px" }}
                    scope="col"
                  >
                    Días
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((entry) => (
                  <tr>
                    <td style={{ paddingBottom: "10px" }}>
                      <div
                        class="td-open d-flex flex-row "
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          paddingRight: "8px",
                          paddingLeft: "8px",
                        }}
                      >
                        {entry.time}
                      </div>
                    </td>
                    <td style={{ paddingBottom: "10px", paddingLeft: "10px" }}>
                      <div className="days-container d-flex flex-row justify-content-center align-items-center">
                        <div
                          className={`day ${
                            entry.days.includes("L") ? "selected" : ""
                          }`}
                        >
                          L
                        </div>
                        <div
                          className={`day ${
                            entry.days.includes("M") ? "selected" : ""
                          }`}
                        >
                          M
                        </div>
                        <div
                          className={`day ${
                            entry.days.includes("M") ? "selected" : ""
                          }`}
                        >
                          M
                        </div>
                        <div
                          className={`day ${
                            entry.days.includes("J") ? "selected" : ""
                          }`}
                        >
                          J
                        </div>
                        <div
                          className={`day ${
                            entry.days.includes("V") ? "selected" : ""
                          }`}
                        >
                          V
                        </div>
                        <div
                          className={`day ${
                            entry.days.includes("S") ? "selected" : ""
                          }`}
                        >
                          S
                        </div>
                        <div
                          className={`day ${
                            entry.days.includes("D") ? "selected" : ""
                          }`}
                        >
                          D
                        </div>
                        <div className={`day-deleted`}>-</div>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td class="justify-content-center align-items-center d-flex">
                    <div class="circle-icon d-flex justify-content-center align-items-center">
                      +
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="container-fluid mt-3">
              <div class="row justify-content-center align-items-center d-flex">
                <div class="col-6 justify-content-center align-items-center d-flex">
                  <button
                    type="button"
                    class="btn btn-secondary w-100"
                    style={{ borderRadius: "20px" }}
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                </div>
                <div class="col-6 justify-content-center align-items-center d-flex">
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    style={{ borderRadius: "20px" }}
                    onClick={handleDetail}
                    data-bs-dismiss="modal"
                  >
                    Crear recordatorio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicationCreate;
