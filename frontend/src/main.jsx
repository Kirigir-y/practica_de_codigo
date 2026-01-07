import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/loginPage.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/registerPage.jsx';
import { createRoot } from 'react-dom/client'
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>        
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
