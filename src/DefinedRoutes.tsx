import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Components/Error/NotFound';
import Home from './Components/Pages/Home';

function DefinedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default DefinedRoutes;
