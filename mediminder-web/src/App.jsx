import { useEffect } from 'react'
import './App.css'
import Login from './views/login/login.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import { useNavigate } from 'react-router'
import { useToast } from './hooks/useToast.js'
import MedicationDetail from './views/medication-detail/medication-detail.jsx';

function App() {
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
