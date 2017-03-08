import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);
const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:7777/graphql')
})

ReactDOM.render(
  <ApolloProvider store={createStoreWithMiddleware(reducers)} client={client}>
    <Router history={browserHistory} routes={routes} />
  </ApolloProvider>
  , document.querySelector('#body-wrapper'));
