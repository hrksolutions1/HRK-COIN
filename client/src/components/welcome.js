import React from 'react';
import Login from './auth/Login';
import Register from './auth/Registeruser';
import { Component } from 'react';


class Welcome extends Component {
  render() {
    return (
    	<div>
		<span>Welcome to HRK COIN</span>
		<div style={{display:"inline-block"}}> <Login /> </div>

        <div style={{display:"inline-block"}}> <Register /> </div>
       
        </div>
       );
   }
}
