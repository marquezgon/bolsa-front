import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { ApolloClient, createNetworkInterface, addTypename } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:7777/graphql'
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
        req.options.headers = {};  // Create the header object if needed.
    }

    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('bolsa_user_token');
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface
})


ReactDOM.render(
  <ApolloProvider store={createStoreWithMiddleware(reducers)} client={client}>
    <Router history={browserHistory} routes={routes} />
  </ApolloProvider>
  , document.querySelector('#body-wrapper'));
