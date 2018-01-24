import React from 'react';
import { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Login from './auth/signin';
import Register from './auth/signup';

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
