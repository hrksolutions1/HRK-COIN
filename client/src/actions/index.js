import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './actiontypes'; // action types

const base_url = 'http://localhost:3090';

export function logInUser({ email, password }) {
  return function (dispatch) {
    // Submit to server
    axios.post(`${base_url}/login`, { email, password }) // email:email, pasword:pasword  ... etc.
      .then(response => {
        // If good:
        // Update state to Authenticated
        dispatch({ type: AUTH_USER });
        // Save JWT token
        localStorage.setItem('token',response.data.token)
        // redirect to the route /feature
        browserHistory.push('/profile');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      })
    // If request is Based
    // Show an error
  }

};

export function registerUser({ email, password, userName }) {
  return function (dispatch) {
    axios({
        url: `${base_url}/register`,
        data: { email, password, userName },
        method: 'post',
        responseType: 'json'
      })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/profile');
      })
      .catch(error => {
        dispatch(authError(error.response.data.error));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
   //browserHistory.push('/');
};

export function logoutUser() {
  localStorage.removeItem('token');
   browserHistory.push('/');
  return {
    type: UNAUTH_USER,
    payload: null
  };
 
};

export function fetchMessage() {
  return function (dispatch) {
    axios({
     url:  `${base_url}/profile`,
     headers: { authorization: localStorage.getItem('token') },
     method: 'get'
   })
      .then(response =>{
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      });
  };
};
