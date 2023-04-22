import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import Constants from 'expo-constants'; 

export default function AddNewListing ({navigation}) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/FreeVector-Jungle-Background.jpg')} resizeMode="cover" style={styles.image}>
      <View style = {styles.contentContainer}>

      <TouchableOpacity style = {styles.backButton} onPress = {() => navigation.goBack()}>
      <Text style = {styles.backButtonText}> Back </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style = {styles.buttons}>
        <Text style = {styles.aboutParagraph}>
        What is the name of the product which you are trying to list?
        </Text>
      </TouchableOpacity>

      <TextInput style = {styles.input}> 
      </TextInput> 

      <TouchableOpacity style = {styles.buttons}>
        <Text style = {styles.aboutParagraph}>
        What quantity (how much/many) of the product are you trying to list?
        </Text>
      </TouchableOpacity>

      <TextInput style = {styles.input}> 
      </TextInput> 

      <TouchableOpacity 
        style = {styles.purchaseButton}
        onPress = {() => navigation.navigate("SuccessfulList")}
      >
        <Text style = {styles.backButtonText}> List </Text>
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

  backButton: {
    borderRadius: 30, 
    backgroundColor: '#a61717', 
    borderColor: 'black',
    marginLeft: 6, 
    marginRight: 275, 
    marginUp: -500,
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
    fontSize: 15,
    fontWeight: 'bold', 
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    backgroundColor: '',
    lineSpacing: 1.0
  },

   purchaseButton: {
    elevation: 8,
    backgroundColor: "#1194d1",
    borderRadius: 30,
    paddingVertical:12,
    paddingHorizontal: 50,
    paddingLeft: 80, 
    marginTop: 18,
    marginBottom: 5,
    marginLeft: 55,
    marginRight: 55,
    padding: 1,
    borderWidth: 3,
    borderColor: 'black'
  },
});
