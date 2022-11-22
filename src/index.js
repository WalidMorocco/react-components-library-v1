import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import MainPage from './pages/MainPage';

// Create root element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
