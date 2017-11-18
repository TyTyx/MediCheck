import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
//import { StackNavigation } from 'react-navigation'; // 1.0.0-beta.19
// ERROR. The Expo team has been notified.


export default class App extends React.Component{
  static navigationOptions={
    title: 'Menu'
  };

  _handleButtonPress = () => {
    Alert.alert(
      'You are now logged out!',
    );
  };

  render(){
    //const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text> Main Menu </Text>
        <Button 
        title="Medicine"
        /* 
          Navigate to Evans page(medicine)
          onPress={() => this.onPressMedicine()}
        */
        />
        <Button 
        title="Log Out"
        style={styles.button}
        onPress={this._handleButtonPress}
          /*() => () => navigate('Home')*/
        />
      
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33FF99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    padding: 20,
    width: '100%',
    backgroundColor: '#00aeef',
    borderRadius: 4,
    alignItems: 'center',
  },
 
});