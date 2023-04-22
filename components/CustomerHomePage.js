import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants'; 

export default function CustomerSignIn ({navigation}) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/FreeVector-Jungle-Background.jpg')} resizeMode="cover" style={styles.image}>
      <View style = {styles.contentContainer}>

      <TouchableOpacity style = {styles.backButton} onPress = {() => navigation.goBack()}>
      
      <Text style = {styles.backButtonText}> Back </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttons}>
      <Text style = {styles.backButtonText}> 2 stores near your address. Charities and NPOs get priority over listings. </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.storeButton}
      onPress = {() => navigation.navigate("VonsListings")}
      >
        <Text style = {styles.aboutParagraph}>
          Vons - 820 Arneill Rd
        </Text>
        <Image source = {require('../assets/2017-01-21.jpg')}>
        </Image> 
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.storeButton}
      onPress = {() => navigation.navigate("SproutsListings")}
      >
        <Text style = {styles.aboutParagraph}>
          Sprouts - 2400 Las Posas Rd
        </Text>
        <Image source = {require('../assets/2017-07-13.jpg')}>
        </Image> 
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
    fontSize: 15,
    textAlign: 'center'
  },

  backButton: {
    borderRadius: 30, 
    backgroundColor: '#a61717', 
    borderColor: 'black',
    marginLeft: 20, 
    marginRight: 275, 
    alignItems: 'left'
  },

  buttons: {
    elevation: 8,
    backgroundColor: "#428c7f",
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 7,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 1,
    borderWidth: 3,
    borderColor: 'black'
  },

  storeButton: {
    elevation: 8,
    backgroundColor: "#428c7f",
    borderRadius: 30,
    paddingVertical:12,
    paddingHorizontal: 50,
    marginTop: 18,
    marginBottom: 5,
    marginLeft: 50,
    marginRight: 50,
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

  storeImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200, 
    height: 200
  },
  
  aboutParagraph: {
    fontSize: 15,
    fontWeight: 'bold', 
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    backgroundColor: '',
    lineSpacing: 1.0
  }
});
