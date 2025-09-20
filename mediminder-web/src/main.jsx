import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './views/login/login.jsx'
// Import our custom CSS

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
