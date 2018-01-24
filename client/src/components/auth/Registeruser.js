import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Register extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to signup
    this.props.registerUser(formProps);
  }
  renderAlert(){
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Error!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  render(){
    const { handleSubmit, fields: { userName, email, password, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
       <div> Create an account</div>
        <fieldset className="form-group">
         <div >
          <label>User Name: </label>
          <input className="form-control" {...userName} />
          { userName.touched && userName.error && <div className="error">{ userName.error }</div>}
           </div>
            <div>
          <label>Email: </label>
          <input className="form-control" {...email} />
          { email.touched && email.error && <div className="error">{ email.error }</div>}
           </div>
            <div>
          <label>Password: </label>
          <input className="form-control" {...password} type="password" />
          { password.touched && password.error && <div className="error">{ password.error }</div>}
           </div>
            <div>
          <label>Password Confirm: </label>
          <input className="form-control" {...passwordConfirm}  type="password" />
          { passwordConfirm.touched && passwordConfirm.error && <div className="error">{ passwordConfirm.error }</div>}
         </div>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email){
    errors.email = 'Please enter an email';
  }

  if (!formProps.userName){
    errors.userName = 'Please enter an user name';
  }

  if (!formProps.password){
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm){
    errors.passwordConfirm = 'Please enter a password confirmation';
  }


  if (formProps.password !== formProps.passwordConfirm){
    errors.password = "passwords must match";
  }


  // console.log(formProps);

  return errors;
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error};
}

export default reduxForm({
  form: 'register',
  fields: ['userName','email','password','passwordConfirm'],
  validate
},mapStateToProps,actions)(Register);
