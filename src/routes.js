import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import CandidatoIndex from './containers/candidato_index';
import Login from './components/login';
import Registro from './components/registro';
import Verificar from './components/verificar_cuenta';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CandidatoIndex} />
    <Route path="login" component={Login} />
    <Route path="registro" component={Registro} />
    <Route path="verificar_cuenta" component={Verificar} />
  </Route>
)
