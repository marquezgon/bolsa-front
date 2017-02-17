import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CandidatoIndex from './containers/candidato_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CandidatoIndex} />
  </Route>
)
