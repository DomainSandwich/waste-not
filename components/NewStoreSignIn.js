import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, TextInput} from 'react-native';
import Constants from 'expo-constants'; 

export default function NewStoreSignIn ({navigation}) {
  
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/FreeVector-Jungle-Background.jpg')} resizeMode="cover" style={styles.image}>
      <View style = {styles.contentContainer}>
        
      <TouchableOpacity style = {styles.backButton} onPress = {() => navigation.goBack()}>
      <Text style = {styles.backButtonText}> Back </Text>
      </TouchableOpacity>

       <TextInput
         style={styles.input}
         placeholder = "Store Name: "
         keyboardType = "email-address"
         bordercolor = 'black'
         
      />
      <TextInput
        style={styles.input}
        placeholder = "Store Address: "
        keyboardType = "email-address"
        bordercolor = 'black'
      />
      <TextInput
        style={styles.input}
        placeholder = "Phone Number: "
        keyboardType = "email-address"
        bordercolor = 'black'
      />
      <TextInput
        style={styles.input}
        secureTextEntry = {true}
        placeholder = "Password: "
        keyboardType = "email-address"
        bordercolor = 'black'
      />

      <TouchableOpacity 
      style = {styles.buttons}
      onPress= {() => navigation.navigate("StoreRegistrationConfirmation")}
      >
      <Text style = {styles.buttonText}>Register!</Text>
      </TouchableOpacity>

      </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },

  input: {
    borderColor: "#428c7f", 
    borderBottomWidth: 2, 
    padding: 5,
    color:"#FFFFFF",
    fontSize: 20, 
    fontWeight: 'bold',
    marginLeft: 65, 
    marginRight: 50,
    width: 200
  },

  backButtonText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 18
  },

  backButton: {
    borderRadius: 30, 
    backgroundColor: '#a61717', 
    borderColor: 'black',
    marginLeft: 6, 
    marginRight: 275, 
    marginBottom: 120,
    alignItems: 'left',
    marginTop: -150
  },

  buttons: {
    elevation: 8,
    backgroundColor: "#428c7f",
    borderRadius: 30,
    paddingVertical:5,
    paddingHorizontal: 50,
    marginTop: 18,
    marginLeft: 50,
    marginRight: 50,
    padding: 1,
    borderWidth: 3,
    borderColor: 'black'
  },

  buttonText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  contentContainer: {
    justifyContent: 'center',
    flex: 1, 
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null, 
    height: null
  },

});
