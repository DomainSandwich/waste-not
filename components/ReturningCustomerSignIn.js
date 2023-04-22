import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Image } from 'react-native';

const USERS = [
  { username: 'advaith_nair', password: 'advaith' },
  { username: 'isaac_lares', password: 'isaac' },
];

export default function ReturningCustomerSignIn ({navigation}) {
  // State to store the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Check if the provided credentials are valid
    const isValid = USERS.some(user => user.username === username && user.password === password);

    if (isValid) {
      // Navigate to the store home page if the credentials are valid
      navigation.navigate("CustomerHomePage");
    } else {
      // Show an error message if the credentials are invalid
      navigation.navigate("IncorrectPassword")
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/FreeVector-Jungle-Background.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("TitleScreen")}>
            <Text style={styles.backButtonText}> Back </Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder = "Username: "
            keyboardType = "email-address"
            onChangeText={text => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.otherInput}
            secureTextEntry
            placeholder="Password: "
            keyboardType="email-address"
            onChangeText={text => setPassword(text)}
            value={password}
          />

          <TouchableOpacity style={styles.buttons} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Enter!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.newUserButton} onPress={() => navigation.navigate("NewCustomerSignIn")}> 
            <Text style={styles.newUserButtonText}>New User?</Text>
          </TouchableOpacity> 
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },

  input: {
    borderColor: "#428c7f", 
    borderBottomWidth: 2, 
    padding: 10,
    color:"#FFFFFF",
    fontSize: 25, 
    fontWeight: 'bold',
    marginLeft: 65, 
    marginRight: 50,
    width: 200
  },

  otherInput: {
    borderColor: "#428c7f", 
    borderBottomWidth: 2, 
    padding: 10, 
    color:"#FFFFFF",
    fontSize: 25, 
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
    fontSize: 25,
    textAlign: 'center'
  },

  newUserButton: {
    elevation: 8,
    backgroundColor: "#1194d1",
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

  newUserButtonText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: ''

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
  }
});