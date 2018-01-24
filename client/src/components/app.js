import React from 'react';
import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './auth/Login';
import Register from './auth/Registeruser';

export default class App extends Component {
  render() {
    return (
      <div>  
       <Header />     
        {this.props.children ?  this.props.children : 
        <div>
      <div style={{display:"inline-block"}}> <Login /> </div>

        <div style={{display:"inline-block"}}> <Register /> </div>
       
        </div>
       }
       <Footer />
      </div>
    );
  }
}
