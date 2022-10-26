import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PublicRoute from '@/pages/Public/PublicRoute';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRoute />
      </BrowserRouter>

    </div >
  );
}

export default App;