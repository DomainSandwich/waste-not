import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants'; 

export default function Burger ({navigation}) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/FreeVector-Jungle-Background.jpg')} resizeMode="cover" style={styles.image}>
      <View style = {styles.contentContainer}>

      <TouchableOpacity style = {styles.backButton} onPress = {() => navigation.goBack()}>
      <Text style = {styles.backButtonText}> Back </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttons}>
        <Text style = {styles.aboutParagraph}>
          Pickup will be 1/8/2022, at 7 PM, at the store. Are you sure you want to purchase? If the pick-up is not completed, there will only be a partial refund. 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.purchaseButton}
      onPress = {() => navigation.navigate("Purchase")}
      >
      <Text style = {styles.backButtonText}> Purchase </Text>
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

  purchaseButton: {
    elevation: 8,
    backgroundColor: "#1194d1",
    borderRadius: 30,
    paddingVertical:12,
    paddingHorizontal: 50,
    paddingLeft: 100, 
    marginTop: 18,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 1,
    borderWidth: 3,
    borderColor: 'black'
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
    fontSize: 25,
    fontWeight: 'bold', 
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    backgroundColor: '',
    lineSpacing: 1.0
  }
});
