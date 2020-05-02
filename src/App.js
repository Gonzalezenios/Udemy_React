import React from 'react';
import './App.css';
import HolaMundo from './components/HolaMundo';
import Saludar from './components/Saludar';


function App() {

const user = {
  name: "Enio",
  age: "31",
  color: "Azul"
};

const saludarFn = (name, age) => {
  alert(`Hola, ${user.name} tiene ${user.age} años y su color favorito es el ${user.color}`)
}

  return (
    <div className="App">
      <header>
        <h1>React Boostrap  </h1>
       <HolaMundo />
       <Saludar userInfo={user} saludarFn={saludarFn} />
      </header>
    </div>
  );
}

export default App;
