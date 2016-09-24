import React, {Component} from 'react';
import { Text, View, TextInput, TouchableNativeFeedback } from 'react-native';


class PizzaApp extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};

    this.navPrev = this.navPrev.bind(this);
  }

  navPrev(){
    this.props.navigator.push({
      index: 0
    });
  }


  render(){
    return (
      <View style={{padding: 10, backgroundColor: 'lightblue'}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <TouchableNativeFeedback
            onPress={this.navPrev}
            background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
            <Text style={{margin: 30}}>Button</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default PizzaApp;
