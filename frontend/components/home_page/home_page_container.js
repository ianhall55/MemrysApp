import {connect} from 'react-redux';
import React from 'react';
import HomePage from './home_page';
// import { clearErrors } from '../../actions/forms_actions';
// errors: state.forms.signup.errors
// clearErrors: () => dispatch(clearErrors())

const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
