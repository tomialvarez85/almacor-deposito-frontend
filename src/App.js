import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [depositos, setDepositos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/healthinsurances/')
        .then(res => {
            console.log(res.data)
            setDepositos(res.data)
        }).catch(err => {
            console.log(err)
        })
  }, [])


  const DoSomething = () => {
    document.getElementById('sz').style.display = 'block';
  }

  const DoOtherThing = () => {
    document.getElementById('next').style.display = 'inline-block';
  }

  return (
    <div className="App">
      <h1>Seleccion de zona a trabajar</h1>
      <div>
        <h3>Seleccione Deposito</h3>
        <select name="healthinsurance" onBlur={DoSomething}>
						<option selected>Obra social</option>
            {
              depositos.map(deposito => (
                <option key={deposito.id} value={deposito.id}>{deposito.name}</option>
              ))
            }
        </select>
      </div>
      <div>
        <h3>Seleccione Zona</h3>
        <select id="sz" className="select-zone" onBlur={DoOtherThing}>
          <option>Todas</option>
          <option>Carpa</option>
          <option>Monitor</option>
        </select>
      </div>
      <a id="next" href="/selectoperation">Siguiente</a>
    </div>
  );
}

export default App;
