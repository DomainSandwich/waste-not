import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TitleScreen from './components/TitleScreen';
import About from './components/About'
import ReturningCustomerSignIn from './components/ReturningCustomerSignIn'
import NewCustomerSignIn from './components/NewCustomerSignIn'
import RegistrationConformation from './components/RegistrationConfirmation'
import ReturningStoreSignIn from "./components/ReturningStoreSignIn"
import NewStoreSignIn from './components/NewStoreSignIn'
import StoreRegistrationConfirmation from './components/StoreRegistrationConfirmation'
import CustomerHomePage from './components/CustomerHomePage'
import StoreHomePage from './components/StoreHomePage'
import AddNewListing from './components/AddNewListing'
import VonsListings from './components/VonsListings'
import Doritos from './components/Doritos'
import Purchase from './components/Purchase'
import PBJ from './components/PBJ'
import SproutsListings from './components/SproutsListings'
import Burger from './components/Burger'
import Cilantro from './components/Cilantro'
import SuccessfulList from './components/SuccessfulList'
import IncorrectPassword from './components/IncorrectPassword'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name= 'TitleScreen' component={TitleScreen} options={{
         headerShown: false
       }}/>
       <Stack.Screen name= 'About' component={About} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'ReturningCustomerSignIn' component={ReturningCustomerSignIn} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'NewCustomerSignIn' component={NewCustomerSignIn} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'RegistrationConfirmation' component={RegistrationConformation} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'ReturningStoreSignIn' component={ReturningStoreSignIn} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'NewStoreSignIn' component={NewStoreSignIn} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'StoreRegistrationConfirmation' component
       ={StoreRegistrationConfirmation} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'CustomerHomePage' component={CustomerHomePage} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'StoreHomePage' component={StoreHomePage} options={{
         headerShown: false
       }}/>

      <Stack.Screen name= 'AddNewListing' component={AddNewListing} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'VonsListings' component={VonsListings} options={{
         headerShown: false
       }}/>
       
       <Stack.Screen name= 'Doritos' component={Doritos} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'Purchase' component={Purchase} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'PBJ' component={PBJ} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'SproutsListings' component={SproutsListings} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'Burger' component={Burger} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'Cilantro' component={Cilantro} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'SuccessfulList' component={SuccessfulList} options={{
         headerShown: false
       }}/>

       <Stack.Screen name= 'IncorrectPassword' component={IncorrectPassword} options={{
         headerShown: false
       }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
