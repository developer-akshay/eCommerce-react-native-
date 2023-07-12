
import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/loginScreen'
import HomeScreen from './src/screens/homeScreen'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import RootNavigation from './src/navigation'

// this will create stak navigator which will return a object with navigator and screen
const Stack =createNativeStackNavigator(); // return object with {Navigator,Screen}

const App = () => {
  return (    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='LoginScreen'
    screenOptions={{headerShown:true}}
    >
      <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          />
      <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{headerShown:false}}
          // options={{title: "Comment at post"}} 
          />
    </Stack.Navigator>
  </NavigationContainer>)
  // <RootNavigation />
  // (
  //   <NavigationContainer>
  //     <Stack.Navigator
  //     initialRouteName='LoginScreen'
  //     screenOptions={{headerShown:true}}
  //     >
  //       <Stack.Screen 
  //           name="LoginScreen" 
  //           component={LoginScreen} 
  //           />
  //       <Stack.Screen 
  //           name="HomeScreen" 
  //           component={HomeScreen} 
  //           options={{headerShown:false}}
  //           // options={{title: "Comment at post"}} 
  //           />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )
  // <HomeScreen />
  // <LoginScreen />
  
}

export default App


