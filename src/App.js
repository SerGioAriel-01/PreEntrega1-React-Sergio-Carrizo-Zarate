import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a CoderTech!" />
    </div>
  );
}

export default App;
