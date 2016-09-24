import React, {Component} from 'react';
import { View, Text, TextInput, TouchableNativeFeedback, TouchableHighlight,
  StyleSheet} from 'react-native';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.navSignup = this.navSignup.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn) {
      // hashHistory.push("/home");
    }
  }

  update(fieldName){
    return e => { this.setState({[fieldName]: e.currentTarget.value }); };
  }

  handleSubmit() {
    const user = this.state;
    this.props.login({user});
    this.navNext();
  }

  navNext(){
    this.props.navigator.push({
      index: 2
    });
  }

  navSignup(){
    this.props.navigator.push({
      index: 0
    });
  }

  renderErrors() {

  }


  render() {

    return(
      <View style={styles.mainContainer}>
        <View style={styles.half}>
          <Text style={styles.title}>Sign In</Text>
        </View>
        <View style={styles.half}>
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
            <View style={styles.button}>
              <Text style={styles.text}>Sign In</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableHighlight onPress={this.navSignup} >
            <Text style={styles.link}>Signup</Text>
          </TouchableHighlight>
        </View>
      </View >
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
  },
  link: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20
  }
});

export default LoginForm;
