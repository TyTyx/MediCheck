import React, { Component } from 'react';
import { Text, View, Button,Image,StyleSheet,KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase'; // 4.6.0
//import MainTaNavigation from '../navigation/MainTaNavigation';
//import {StackNavigator} from 'react-navigation'; // 1.0.0-beta.15
 
import{FormLabel,FormInput} from 'react-native-elements'; // 0.17.0
 
// You can import from local files
 
 
// or any pure javascript modules available in npm
 
 
import "@expo/vector-icons"; // 6.1.0
 if (!firebase.apps.length) {
   
firebase.initializeApp(
  // Initialize Firebase
  {
 
    apiKey: "AIzaSyAtBgTLF-2PbWzEhS-AHRon9pyPH1Ovm60",
    authDomain: "login-app-41c3d.firebaseapp.com",
    databaseURL: "https://login-app-41c3d.firebaseio.com",
    projectId: "login-app-41c3d",
    storageBucket: "login-app-41c3d.appspot.com",
    messagingSenderId: "22559624"
  }
  );
 }
 
export default class login extends Component {
  constructor(props){
    super(props);
    this.state={email:'', password:'', error:'', loading:false};
  }
  onLoginPress(){
    this.setState({error:'', loading:true});
   
    const{email,password}=this.state;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
      this.state({error:'',loading:false});
      //this.props.navigation.navigate('Main');
      alert("hello");
    })
    .catch(()=>{
      this.state({error:'Authentication failed',loading:false});
    })
  }
   onSingUpPress(){
    this.setState({error:'', loading:true});
   
    const{email,password}=this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      this.state({error:'',loading:false});
      //this.props.navigation.navigate('Main');
      alert("hello");
    })
    .catch(()=>{
      this.state({error:'Authentication failed',loading:false});
    })
  }
  renderButtonOrLoading(){
    if(this.state.loading){
        return <Text> Loading </Text>
   
    }
    return <View>
    <Button
        onPress={this.onLoginPress.bind(this)}
        title='Login'/>
   
    <Button
        onPress={this.onSingUpPress.bind(this)}
        title='Sign Up'/>
   
    </View>
  }
  render(){
    return(
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
     
      <View style={styles.logoContainer}>
      <View>
     
       <Image
          style={styles.logo}
          source={{uri: 'https://i.pinimg.com/originals/d8/63/12/d86312e1d2bffd7e859366b51877fca1.jpg'}}
        />
        <Text style={styles.title}>Welcome to Medicheck, please enter your details below.</Text>
      </View>
      <View style={styles.formContainer}>
        <FormLabel>Email</FormLabel>
        <FormInput
        value={this.state.email}
        onChangeText={email=>this.setState({email })}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
        value={this.state.password}
        onChangeText={password=>this.setState({password })}
        />
        {this.renderButtonOrLoading()}
        </View>
        </View>
         </KeyboardAvoidingView>
      )
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