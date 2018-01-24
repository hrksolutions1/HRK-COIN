import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types'; // action types

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function (dispatch) {
    // Submit to server
    axios.post(`${ROOT_URL}/login`, { email, password }) // email:email, pasword:pasword  ... etc.
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

export function signupUser({ email, password, userName }) {
  return function (dispatch) {
    axios({
        url: `${ROOT_URL}/register`,
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
   browserHistory.push('/login');
};

export function signoutUser() {
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
     url:  `${ROOT_URL}/profile`,
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
