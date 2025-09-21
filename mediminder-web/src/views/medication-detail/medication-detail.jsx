import PillFillIcon from '../../assets/pill.fill.svg?react'
import './medication-detail.css'

function MedicationDetail({ name, dosage, schedule=[] }) {
  return (
    <div className="modal fade" tabIndex="-1" id="medication-detail">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className='pill-info d-flex flex-row align-items-center'>
                <div className='icon-background d-inline-flex justify-content-center align-items-center bg-primary'>
                  <PillFillIcon width="16px" height="16px" />
                </div>

                <h1 className="modal-title" style={{ color: 'black' }}>{name}</h1>
              </div>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <h2><b>Dosis</b></h2>
            <p>{dosage}</p>

            <h2><b>Horario</b></h2>
            <table>
              <thead>
                <tr>
                  <th>Hora</th>
                  <th>Días</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((entry) => (
                  <tr>
                    <td style={{ paddingTop: '16px', paddingBottom: '16px', paddingRight: '16px' }}>{entry.time}</td>
                    <td>
                      <div className='days-container d-flex flex-row'>
                        <div className={`day ${entry.days.includes('L') ? 'selected' : ''}`}>L</div>
                        <div className={`day ${entry.days.includes('M') ? 'selected' : ''}`}>M</div>
                        <div className={`day ${entry.days.includes('M') ? 'selected' : ''}`}>M</div>
                        <div className={`day ${entry.days.includes('J') ? 'selected' : ''}`}>J</div>
                        <div className={`day ${entry.days.includes('V') ? 'selected' : ''}`}>V</div>
                        <div className={`day ${entry.days.includes('S') ? 'selected' : ''}`}>S</div>
                        <div className={`day ${entry.days.includes('D') ? 'selected' : ''}`}>D</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicationDetail;
