import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import Header from './components/header';
import Footer from './components/footer';
import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// if we have token, user is signed in
browserHistory.push('/');
if(token){
    // update app state
    store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Header />
      <Route path="/" component={App}>
          <IndexRoute component={Welcome} />
          <Route path="/login" component={Signin} />
          <Route path="/register" component={Signup} />
          <Route path="/logout" component={Signout} />
          <Route path="/profile" component={RequireAuth(Feature)} />
      </Route>
       <Footer />
    </Router>
  </Provider>
  , document.querySelector('.container'));
