import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { Link } from 'react-router';

class Profile extends Component {

  componentWillMount(){
    this.props.fetchMessage();
  }

  render(){
    return (
      <div>Welcome { this.props.message }  you are successfully signed in</div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Profile);
