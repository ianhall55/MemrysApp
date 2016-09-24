import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';

class HomePage extends React.Component {
    constructor(props){
      super(props);
      this.navPrev = this.navPrev.bind(this);
    }

    navPrev(){
      this.props.navigator.push({
        index: 0
      });
    }

    render(){
      const user = (this.props.user) ? this.props.user.username : 'No user' ;
      return(
        <View style={{padding: 10, backgroundColor: 'lightblue'}}>
          <Text>
            {user}
          </Text>
          <TouchableNativeFeedback
              onPress={this.navPrev}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
              <Text style={{margin: 30}}>Button</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
    );}
}

export default HomePage;
