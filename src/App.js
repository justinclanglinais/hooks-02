import React, {useState, useEffect} from 'react';
import './App.css';
import Armbars from './components/Armbars.js';
import Triangles from './components/Triangles.js';
import Omoplatas from './components/Omoplatas.js';

function App () {
  const [armbars, setArmbars] = useState(0);
  const [triangles, setTriangles] = useState(0);
  const [omoplatas, setOmoplatas] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(sumSubmissions)
  
  function handleClickArmbars () {
    setArmbars(armbars + 1)
  }
  function handleClickTriangles () {
    setTriangles(triangles + 1)
  }
  function handleClickOmoplatas () {
    setOmoplatas(omoplatas + 1)
  }
  function sumSubmissions () {
    setTotal(armbars + triangles + omoplatas)
    document.title = `${total} subs`
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
      {total} total submissions
    </div>
  );
}

export default App;