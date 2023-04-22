import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants'; 

export default function VonsListings ({navigation}) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/FreeVector-Jungle-Background.jpg')} resizeMode="cover" style={styles.image}>
      <View style = {styles.contentContainer}>

      <TouchableOpacity style = {styles.backButton} onPress = {() => navigation.goBack()}>
      <Text style = {styles.backButtonText}> Back </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bigButtons}>

        <TouchableOpacity 
          style = {styles.addNewListingButton}
        > 
      <Text style = {styles.aboutParagraph2}> Click on a listing to purchase! </Text>
      </TouchableOpacity> 

      <Text style = {styles.aboutParagraph}>

        <TouchableOpacity 
        style = {styles.buttons}
          onPress = {() => navigation.navigate("Doritos")}
        >
        <Text style = {styles.aboutParagraph}> Nacho Cheese Doritos Party Size - $0.99 </Text>
        <Image source = {require("../assets/My project-1 (3).jpg")} style = {styles.davesImage}> </Image> 
        </TouchableOpacity>

        <TouchableOpacity 
          style = {styles.buttons}
          onPress = {() => navigation.navigate("PBJ")}
        >
        <Text style = {styles.aboutParagraph}> PB & J Sandwich Combo Pack - $1.99 </Text>
        <Image source = {require("../assets/PBJ SANDIWCH.jpg")} style = {styles.goldfishImage} > </Image> 
        </TouchableOpacity>

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

  backButton: {
    borderRadius: 30, 
    backgroundColor: '#a61717', 
    borderColor: 'black',
    marginLeft: 6, 
    marginRight: 275, 
    alignItems: 'left'
  },

  addNewListingButton: {
    alignItems: 'center',
    borderRadius: 30, 
    backgroundColor: '#1194d1', 
    marginLeft: 60,
    marginRight: 60,
    borderColor: 'black',
  },

  davesImage: {
    width: 100,
    height: 100,
    alignItems: 'center'
  },

  goldfishImage: {
    width: 100,
    height: 100,
    alignItems: 'center'
  },

  buttons: {
    elevation: 8,
    backgroundColor: "#428c7f",
    borderRadius: 30,
    paddingVertical:12,
    paddingHorizontal: 12,
    paddingLeft: 80,
    paddingRight: 80,
    marginTop: 18,
    marginBottom: 2,
    marginLeft: 10,
    marginRight: 10,
    padding: 1,
    borderWidth: 3,
    borderColor: 'black'
  },

  bigButtons: {
    elevation: 8,
    backgroundColor: "#428c7f",
    borderRadius: 30,
    paddingVertical:12,
    paddingHorizontal: 12,
    marginTop: 10,
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

  aboutParagraph2: {
    fontSize: 20,
    fontWeight: 'bold', 
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    backgroundColor: '',
    lineSpacing: 1.0
  }
});
