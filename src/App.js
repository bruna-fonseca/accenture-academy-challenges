import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, About } from './pages';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/sobre" element={ <About/> }  />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
