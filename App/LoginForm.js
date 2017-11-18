import React from 'react';
import { StyleSheet, View, TextInput, Text, StatusBar,Button,Alert} from 'react-native';

export default class LoginForm extends React.Component {
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
  
  render() {
    return (
     <View style={styles.container}>
     <StatusBar
     barStyle="dark-content"
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
          style={styles.input}
          password = {this.state.password}
          onChangeText = {(password) => this.onChangePass(password)}
          
          selectionColor='black'
          placeholder="password"
          placeholderTextColor="#3386FF"
        	 returnKeyType="go" //Changes what return key looks like
          secureTextEntry
          ref={(input)=> this.passwordInput=input}
        />
        <Button
          title="Login"
          onPress={this._handleButtonPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom:10,
    color:'#3386FF',
    paddingHorizontal:10
  },
 
});
