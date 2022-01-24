import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import ReposList from './pages/ReposList';
import RepoDetails from './pages/RepoDetails';

import GlobalStyles from './styles/Global';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReposList />} />
        <Route path="/detalhes/:details" element={<RepoDetails />} />
      </Routes>
     <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
