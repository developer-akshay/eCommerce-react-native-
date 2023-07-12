import React from "react";
import { Modal, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/homeScreen";
import SplashScreen from "../screens/splashScreen";
import AuthStack from "./authStack";
import CartScreen from "../screens/cartScreen";
import AccountScreen from "../screens/accountScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/loginScreen/loginScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" >
      {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        /> */}
        {/* Auth Navigator which include Login Signup */}
        {/* <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        />
      </Stack.Navigator>
      {/* <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#0e1529" },
        }}
        sceneContainerStyle={{ backgroundColor: "#0e1529" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                color={focused ? "white" : "gray"}
                size={"24"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="users"
                color={focused ? "white" : "gray"}
                size={"24"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <AccountScreen />,
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
