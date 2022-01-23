import React from 'react';
import './App.css';

import Inputs from './components/Inputs';

const CONTAINER_STYLES = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function App() {
  return (
    <div style={ CONTAINER_STYLES }>
     <Inputs />
    </div>
  );
}

export default App;
