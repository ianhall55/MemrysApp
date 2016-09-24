import React from 'react';
import { Provider } from 'react-redux';
import { Text, View, TextInput, Navigator } from 'react-native';
import PizzaApp from './pizza_test';
import Navigation from './navigation';
import SignupForm from './signup_form/signup_form';

const Root = ({store}) => (
  <Provider store={store} >
    <Navigation />


  </Provider>
);

export default Root;
