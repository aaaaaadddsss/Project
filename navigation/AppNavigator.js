import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from 'expo-font';

//Screens
import WelcomeScreen from "../screens/WelcomeScreen";
import PresetScreen from "../screens/PresetScreen";
import HomeScreen from "../screens/HomeScreen";

//Font
Font.loadAsync({
    'bungee': require('../assets/fonts/Bungee-Regular.ttf'),
    'bvpl': require('../assets/fonts/BeVietnamPro-Light.ttf')
  });


const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{ headerShown: false}}>
                <Stack.Screen name = "WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name = "PresetScreen" component={PresetScreen} />
                <Stack.Screen name = "HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

const styles = StyleSheet.create({});