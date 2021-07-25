import React from 'react';
import './App.css';
import {Preloader} from "./components/preloader/Preloader";
import {Home} from "./components/home/Home";

function App() {
  return (
    <>
        <Home />
      <Preloader />
    </>
  );
}

export default App;
