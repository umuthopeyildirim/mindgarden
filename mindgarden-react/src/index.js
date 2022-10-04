import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

// Routes
/* Landing Pages */
import Landing from './views/Landing';
/* Auth Pages */
import Login from './views/Login';
import Register from './views/Register';
import PasswordRecovery from './views/PasswordRecovery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Landing />} />
        
        {/* Auth Pages */}
        <Route path="login" element={<Login /> } />
        <Route path="register" element={<Register />} />
        <Route path="password-recovery" element={<PasswordRecovery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);