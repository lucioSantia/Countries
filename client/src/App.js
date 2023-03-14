import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./Componentes/LandingPage/LandingPage"
import Home from "./Componentes/Home/Home"
import Actividades from './Componentes/Actividades/Actividades';
import CardDetail from "./Componentes/CardDetail/CardDetail"
// import Actividades from '../../api/src/models/Actividades';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = "/" component ={ LandingPage } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/home/:id" component={ CardDetail } />
        <Route exact path="/activities" component={ Actividades } />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
