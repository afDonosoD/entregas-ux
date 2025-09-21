import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './views/login/login.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import { useNavigate } from 'react-router'
import { useToast } from './hooks/useToast.js'
import MedicationDetail from './views/medication-detail/medication-detail.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [activeUser, setActiveUser] = useLocalStorage('activeUser', null);
  const { showToast } = useToast();
  let navigate = useNavigate();

  useEffect(() => {
    if (!activeUser) {
      navigate('/login');
    }
  }, []);

  const handleSignOut = () => {
    setActiveUser(null);
    showToast('Sesión finalizada', { type: 'warning' });
    navigate('/login');
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleSignOut}>Sign out</button>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#medication-detail">
        Launch demo modal
      </button>
      <MedicationDetail name="Acetaminofén" dosage="1 pastilla" schedule={[
        { time: '9:00 a.m.', days: ['L', 'M', 'M', 'J', 'V'] },
        { time: '10:00 a.m.', days: ['S', 'D'] }
      ]} />
    </>
  )
}

export default App
