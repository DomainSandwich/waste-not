import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants'; 

export default function TitleScreen ({navigation}) {

  const [backgroundColor, setBackgroundColor] = useState('#428c7f');

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/FreeVector-Jungle-Background.jpg')} resizeMode="cover" style={styles.image}>
      <View style = {styles.contentContainer}>

      <Image source = {require("../assets/mother-earth-day.png")} style = {styles.icon}> 
      </Image> 
        <TouchableOpacity 
          onPress={() => navigation.navigate("ReturningCustomerSignIn")} 
          style={styles.buttons}>
          <Text style={styles.paragraph}>Customer</Text>
        </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("ReturningStoreSignIn")} 
        style={styles.buttons}>
        <Text style={styles.paragraph}>Store</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress= {() => navigation.navigate("About")}
        style={styles.buttons}>
        <Text style={styles.paragraph}>Tutorial and Mission</Text>
      </TouchableOpacity>

      <Text style = {styles.creditText}> By Advaith Nair and Isaac Leras
      </Text> 
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

  contentContainer: {
    justifyContent: 'center',
    flex: 1, 
  },
  
  buttons: {
    elevation: 8,
    backgroundColor: "#428c7f",
    borderRadius: 30,
    paddingVertical:20,
    paddingHorizontal: 50,
    marginBottom: 18,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: 'black'
  },

  creditText: {
    textAlign: 'center',
    color: 'white', 
    fontWeight: 'bold'
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null, 
    height: null
  },

  icon: {
    width: 100,
    height: 100,
    alignItems: 'center',
    padding: 50,
    marginUp: 50,
    marginLeft: 120,
    marginDown: 150,
    paddingVertical: 25
  },
  
  paragraph: {
    margin: 12,
    fontSize: 32,
    fontWeight: 'bold', 
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    backgroundColor: ''
  }
});
