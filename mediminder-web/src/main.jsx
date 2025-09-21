import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './views/login/login.jsx'
import RecoverPassword from './views/recover-password/recover-password.jsx'
import Signup from './views/signup/signup.jsx'
import Home from './views/home/home.jsx'
// Import our custom CSS

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="toast-container position-fixed bottom-0 end-0 p-3" id="toast-root"></div>
      <Routes>
        <Route index element={<App />} />
        <Route path='login' element={<Login />} />
        <Route path='recover-password' element={<RecoverPassword />} />
        <Route path='signup' element={<Signup />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
