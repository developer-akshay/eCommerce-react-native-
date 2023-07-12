import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/loginScreen'
import HomeScreen from '../screens/homeScreen';
import SignupScreen from '../screens/signupScreen'
import SignoutScreen from '../screens/signoutScreen';
// import WelcomeScreen from '../screens/Welcome';
// import SignInScreen from '../screens/SignIn';
// import SignOutScreen from '../screens/SignUp';


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
             cardStyle: {
            backgroundColor: '#0e1529'
          },
          headerShown: false
        }}>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignoutScreen" component={SignoutScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
