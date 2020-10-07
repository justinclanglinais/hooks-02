import React from 'react';
import './App.css';

function App() {
  const [armbars, setArmbars] = useState(0);
  const [triangles, setTriangles] = useState(0);
  const [omoplatas, setOmoplatas] = useState(0);

  return (
    <div className="App">
      <Armbars armbars={armbars} />
      <Trianges triangles={triangles} />
      <Omoplatas omoplatas={omoplatas} />
    </div>
  );
}

export default App;
