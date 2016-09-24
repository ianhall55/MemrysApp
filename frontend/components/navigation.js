import { Navigator, View, Text, TouchableHighlight } from 'react-native';
import React, { Component, PropTypes} from 'react';
import SignupFormContainer from './signup_form/signup_form_container';
import HomePageContainer from './home_page/home_page_container';
import LoginFormContainer from './login_form/login_form_container';


export default class Navigation extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ index: 1 }}
        renderScene={this.navigatorRenderScene} />
    );
  }

  navigatorRenderScene(route, navigator) {
    const _navigator = navigator;
    switch (route.index) {
      case 0:
        return (<SignupFormContainer navigator={navigator} title="signup"/>);
      case 1:
        return (<LoginFormContainer navigator={navigator} title="login"/>);
      case 2:
        return (<HomePageContainer navigator={navigator} title="home"/>);

    }
  }
}

// (route, navigator) => {
//   return (
//     <SignupForm
//
//       // Function to call when a new scene should be displayed
//       onForward={ () => {
//         const nextIndex = route.index + 1;
//         navigator.push({
//           title: 'Scene ' + nextIndex,
//           index: nextIndex,
//         });
//       }}
//
//       // Function to call to go back to the previous scene
//       onBack={() => {
//         if (route.index > 0) {
//           navigator.pop();
//         }
//       }}
//     />
//   );}

class MyScene extends Component {

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
