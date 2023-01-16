import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Seleccion de zona a trabajar</h1>
      <div>
        <h3>Seleccione Deposito</h3>
        <select>
          <option>Manzana</option>
          <option>Pera</option>
        </select>
      </div>
      <div>
        <h3>Seleccione Zona</h3>
        <select>
          <option>Todas</option>
          <option>Carpa</option>
          <option>Monitor</option>
        </select>
      </div>
      <a href="/selectoperation">Siguiente</a>
    </div>
  );
}

export default App;
