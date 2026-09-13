import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RegisterModalProvider } from './context/RegisterModalContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterModalProvider>
      <App />
    </RegisterModalProvider>
  </StrictMode>,
)
