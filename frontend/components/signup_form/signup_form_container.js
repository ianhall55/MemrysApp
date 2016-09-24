import {connect} from 'react-redux';
import React from 'react';
import SignupForm from './signup_form';
import { signup, login } from '../../actions/session_actions';
// import { clearErrors } from '../../actions/forms_actions';
// errors: state.forms.signup.errors
// clearErrors: () => dispatch(clearErrors())

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
