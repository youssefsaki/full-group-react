// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{
    v7_startTransition: true,
  }}>
    <NavBar />
    <App />
  </BrowserRouter>,
)
