import React from 'react';
import MainTemplate from './components/templates/MainTemplate';
import Home from './components/pages/Home';
import './App.css'; 

function App() {
  return (
    <MainTemplate>
      <Home />
    </MainTemplate>
  );
}

export default App;