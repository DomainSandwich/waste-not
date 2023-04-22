import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants'; 

export default function StoreRegistrationConfirmation ({navigation}) {

  const randomString = Math.random().toString(36).substring(2, 8);
  const id = `${randomString.slice(0, 2)}-${randomString.slice(2, 4)}-${randomString.slice(4, 6)}-${randomString.slice(6, 8)}`;

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/FreeVector-Jungle-Background.jpg')} resizeMode="cover" style={styles.image}>
      <View style = {styles.contentContainer}>

      <TouchableOpacity style = {styles.buttons}>
        <Text style = {styles.aboutParagraph}>
          You're registered! You can now use your newly created store ID and password to sign in! Store ID: {id}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.homeButton}
      onPress= {() => navigation.navigate("ReturningStoreSignIn")}
      >
        <Text style = {styles.homeButtonText}>
          Sign In Page
        </Text>
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

  backButtonText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 18
  },

  homeButton: {
  borderRadius: 30, 
    backgroundColor: '#1194d1', 
    borderColor: 'black',
    padding: 12,
    marginLeft: 50, 
    marginRight: 50, 
    alignItems: 'center'
  },

  homeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },

  backButton: {
    borderRadius: 30, 
    backgroundColor: '#a61717', 
    borderColor: 'black',
    marginLeft: 6, 
    marginRight: 275, 
    alignItems: 'left'
  },

  buttons: {
    elevation: 8,
    backgroundColor: "#428c7f",
    borderRadius: 30,
    paddingVertical:12,
    paddingHorizontal: 50,
    marginTop: 18,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 1,
    borderWidth: 3,
    borderColor: 'black'
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
  
  aboutParagraph: {
    fontSize: 20,
    fontWeight: 'bold', 
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    backgroundColor: '',
    lineSpacing: 1.0
  }
});
