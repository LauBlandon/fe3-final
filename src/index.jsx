import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DentistProvider } from './Components/utils/global.context';

import './index.css';
import App from './App';
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DentistProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path="/home" element={<Home />} />
              <Route path="/dentist/:id" element={<Detail />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DentistProvider>
  </React.StrictMode>
);
