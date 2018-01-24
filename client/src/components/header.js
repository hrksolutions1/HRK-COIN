import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks(){
    if (this.props.authenticated){
      // signout
      return  <button className="bbtn_exchange"><Link to="logout">Log Out</Link></button>
    } 
  }
              
  render(){
    return (
     <div className="home">
      <div className="header">
      <div className="title">HRK COIN</div>
      <div className="bttn_header"> 
        <button className="bbtn_exchange">Trade</button>
         <button className="bbtn_exchange">Market Cap</button>
         <button className="bbtn_exchange"><Link to="/login">Log In</Link></button>
         <button className="bbtn_exchange"><Link to="/register">Register</Link></button>
          {this.renderLinks()}
        </div>
    </div>
   </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
