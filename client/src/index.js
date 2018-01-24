import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import Header from './components/Header';
import Footer from './components/Footer';
import App from './components/App';
import Login from './components/auth/Login';
import Register from './components/auth/Registeruser';
import Logout from './components/auth/Logout';
import Profile from './components/Profile';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import reducers from './reducers';
import { AUTH_USER } from './actions/actiontypes';

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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/profile" component={RequireAuth(Profile)} />
      </Route>
       <Footer />
    </Router>
  </Provider>
  , document.querySelector('.container'));
