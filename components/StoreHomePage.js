import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants'; 

export default function StoreHomePage ({navigation}) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/FreeVector-Jungle-Background.jpg')} resizeMode="cover" style={styles.image}>
      <View style = {styles.contentContainer}>

      <TouchableOpacity style = {styles.backButton} onPress = {() => navigation.goBack()}>
      <Text style = {styles.backButtonText}> Back </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bigButtons}>
        <Text style = {styles.aboutParagraph}>
        Your Current Listings:   

        <TouchableOpacity style = {styles.buttons}>
        <Text style = {styles.aboutParagraph}> Dave's Killer Whole Wheat Bread - $1.99 </Text>
        <Image source = {require("../assets/My project-1.jpg")} style = {styles.davesImage}> </Image> 
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttons}>
        <Text style = {styles.aboutParagraph}> Goldfish Crackers Flavor Blasted - $1.49 </Text>
        <Image source = {require("../assets/goldfish.jpg")} style = {styles.goldfishImage} > </Image> 
        </TouchableOpacity>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.addNewListingButton}
      onPress = {() => navigation.navigate("AddNewListing")}
      > 
      <Text style = {styles.aboutParagraph2}> Add New Listing </Text>
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
