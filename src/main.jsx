import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { RegisterModalProvider } from './context/RegisterModalContext'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <RegisterModalProvider>
          <App />
        </RegisterModalProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
)
