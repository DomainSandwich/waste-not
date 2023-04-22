import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants'; 

export default function Purchase ({navigation}) {

  const randomNumber = Math.floor(Math.random() * 1000000).toString();
  const paddedNumber = '0'.repeat(6 - randomNumber.length) + randomNumber;

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/FreeVector-Jungle-Background.jpg')} resizeMode="cover" style={styles.image}>
      <View style = {styles.contentContainer}>

      <TouchableOpacity style = {styles.buttons}>
        <Text style = {styles.aboutParagraph}>
          Purchase completed! Order Number: {paddedNumber}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.purchaseButton}
        onPress = {() => navigation.navigate("TitleScreen")}
      >
        <Text style = {styles.backButtonText}> Home </Text>
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
    fontSize: 30
  },

  backButton: {
    borderRadius: 30, 
    backgroundColor: '#a61717', 
    borderColor: 'black',
    marginLeft: 6, 
    marginRight: 275, 
    alignItems: 'left'
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
    marginLeft: 40,
    marginRight: 40,
    padding: 1,
    borderWidth: 3,
    borderColor: 'black'
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
    fontSize: 30,
    fontWeight: 'bold', 
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    backgroundColor: '',
    lineSpacing: 1.0
  }
});
