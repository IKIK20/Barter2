import React, {Component} from 'react';
import {Text, View, textInput, StyleSheet, Alert, TextInput} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignupLoginScreen extends Component{
    constructor(){
        super();
        this.state={
          emailId:'',
          password:'',
        }
    }


    userSignUp = (username, password) =>{
      firebase.auth().createUserWithEmailAndPassword(username, password)
      .then((response)=>{
          return Alert.alert("User Added Successfully")
      }
      .catch(function (error)=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      });
    }
 
 userLogin = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
        return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }
 
   render(){
     return(
        <View>
            <Text> USERNAME </Text>
            <TextInput 
              style={styles.loginBox}> 
              keyboardType='email-address'
              onChangeText={(text)=>{
                  this.setState({
                      username:text
                  })
              }
            }
            />
        </View>
     )
   }


}
const styles = StyleSheet.create({
loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  
})
 
 