import React, {useState} from 'react';
import './App.css';
import Armbars from './components/Armbars.js';
import Triangles from './components/Triangles.js';
import Omoplatas from './components/Omoplatas.js';

function App () {
  const [armbars, setArmbars] = useState(0);
  const [triangles, setTriangles] = useState(0);
  const [omoplatas, setOmoplatas] = useState(0);

  function handleClickArmbars () {
    setArmbars(armbars + 1)
  }
  function handleClickTriangles () {
    setArmbars(triangles + 1)
  }
  function handleClickOmoplatas () {
    setArmbars(omoplatas + 1)
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleClickArmbars}>
          Get an armbar!
        </button>
        <Armbars armbars={armbars} />
      </div>
      <div>
        <button onClick={handleClickTriangles}>
          Get a triangle!
        </button>
        <Triangles triangles={triangles} />
      </div>
      <div>
        <button onClick={handleClickOmoplatas}>
          Get an omoplata!
        </button>
        <Omoplatas omoplatas={omoplatas} />
      </div>
    </div>
  );
}

export default App;