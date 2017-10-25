import React from 'react';
import { Alert, StyleSheet,TextInput, Text, View, Button, Image, KeyboardAvoidingView, StatusBar} from 'react-native';
import LoginForm from './LoginForm';
import {StackNavigator} from 'react-navigation';



 class HomeScreen extends React.Component {
  static navigationOptions={
    title:'Home'
  };
  render() {
    const {navigate}= this.props.navigation;
    return (
      
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
       <Image
          style={styles.logo}
          source={{uri: 'https://i.pinimg.com/originals/d8/63/12/d86312e1d2bffd7e859366b51877fca1.jpg'}}
        />
        <Text style={styles.title}>Welcome to Medicheck, please enter your details below.</Text>
      </View>
      <View style={styles.formContainer}>
      <LoginForm />
      <View style={styles.logoContainer}>
        <Text
          style={styles.title}>Don't Have an Account? Register Here</Text>
        <Button
          onPress={() => navigate('Registration')}
          title="Register"
        />
      </View>
      
        </View>
      </KeyboardAvoidingView>
    );
  }
}
class RegistrationScreen extends React.Component{
    _handleButtonPress = () => {
    Alert.alert(
      this.state.email, 
      this.state.password,
    );
  };
  constructor(props) {
    super(props);
 
    this.state = {
 
      email: this.props.email,
      password: this.props.password,
 
    }
  }
  onChangeMail(email){
  	this.setState({email: email});
  }
  onChangePass(password){
  	this.setState({password: password});
  }
  static navigationOptions={
    title:'Register',
   
  };
  render(){
    return(
  <View style={styles.container}>
     <StatusBar
     barStyle="dark-content"
     />
        <TextInput 
        style={styles.input}
        placeholder="First Name"
        fName = {this.state.fName}
        onChangeText = {(fName) => this.onChangeName(fName)}
        
        placeholderTextColor="#3386FF"
        returnKeyType="next" //changes what return key looks like
        onSubmitEditing={()=>this.passwordInput.focus()}// this will jump to password
        autoCapitalize="none"
        autoCorrect={false}
        />
        <TextInput 
        style={styles.input}
        placeholder="username or email"
        email = {this.state.email}
        onChangeText = {(email) => this.onChangeMail(email)}
        
        placeholderTextColor="#3386FF"
        returnKeyType="next" //changes what return key looks like
        onSubmitEditing={()=>this.passwordInput.focus()}// this will jump to password
        keyboardType="email-address"//changes keyboard to include @ signs
        autoCapitalize="none"
        autoCorrect={false}
        />
        <TextInput 
        placeholder="password"
        password = {this.state.password}
        onChangeText = {(password) => this.onChangePass(password)}
        
        placeholderTextColor="#3386FF"
        returnKeyType="go" //Changes what return key looks like
        secureTextEntry
        style={styles.input}
        ref={(input)=> this.passwordInput=input}
        />
        <Button
          title="Register"
          onPress={this._handleButtonPress}
        />
      </View>
    );
  }
}
export const App= StackNavigator({
  Home: {screen: HomeScreen},
  Registration: {screen: RegistrationScreen},
});

export default class App1 extends React.Component{
  render(){
    return <App />
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33FF99',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
   
    width:120,
    height: 100
  },
title: {
  color:'#3386FF',
  marginTop: 10,
  width: 160,
  textAlign: 'center',
  opacity: 0.9,

}
});
