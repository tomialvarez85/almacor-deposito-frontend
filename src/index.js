import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import select_operation from './components/select_operation/select_operation';
import orden_de_carga from './components/orden_de_carga/orden_de_carga';

const routing = (
	<Router>
		<React.StrictMode>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/selectoperation" component={select_operation} />
				<Route exact path="/ordendecarga" component={orden_de_carga} />
			</Switch>
		</React.StrictMode>
	</Router>
);

const divRoot = document.querySelector('#root');
const root = createRoot( divRoot );

root.render(routing);





