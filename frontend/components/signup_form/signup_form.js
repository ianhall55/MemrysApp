import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, TouchableNativeFeedback, StyleSheet } from 'react-native';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.navLogin = this.navLogin.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn) {
      // hashHistory.push("/home");
    }
  }

  componentWillUnmount(){

  }

  update(fieldName){
    return e => { this.setState({[fieldName]: e.currentTarget.value }); };
  }

  handleSubmit() {
    const user = this.state;
    this.props.signup({user});
    this.navNext();
  }

  navNext(){
    this.props.navigator.push({
      index: 2
    });
  }

  navLogin(){
    this.props.navigator.push({
      index:1
    });
  }

  renderErrors() {

  }


  render() {

    return(
      <View style={{padding: 10, backgroundColor: 'lightblue'}}>
        <TextInput
          style={{height: 40}}
          placeholder="Name"
          onChangeText={(text) => this.setState({name: text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={(text) => this.setState({username: text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableNativeFeedback
            onPress={this.handleSubmit}
            background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
            <Text style={{margin: 30}}>Button</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableHighlight onPress={this.navLogin}>
          <Text>Have an account? Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  half: {
    flex: 0.5,
    justifyContent: 'center',
  },
  quarter: {
    flex: 0.25
  },
  button: {
    height: 50,
    backgroundColor: '#21CE99',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  title: {
    fontSize: 50,
    textAlign: 'center'
  }
});

export default SignupForm;
