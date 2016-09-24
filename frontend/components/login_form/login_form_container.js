import {connect} from 'react-redux';
import React from 'react';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
// import { clearErrors } from '../../actions/forms_actions';
// errors: state.forms.signup.errors
// clearErrors: () => dispatch(clearErrors())

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
