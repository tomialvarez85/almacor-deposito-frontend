import React from 'react';
import './select_operation.css';

const select_operation = () => {
  return (
    <div className="Select_operation">
      <div className="operacionesuno">
        <a className="itemone" href="/ordendecarga">Orden de Carga</a>
        <a className="itemtwo" href="#">Ubicar</a>
      </div>
      <div className="operacionesdos">
        <a className="itemthree" href="#">Quitar</a>
        <a className="itemfour" href="#">Inventario</a>
      </div>
      <a className="goback" href="/">Volver</a>
    </div>
  )
}

export default select_operation;