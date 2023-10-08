// Dependencies
import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

// Screens
import WelcomeScreen from "../screens/WelcomeScreen";
import PresetScreen from "../screens/PresetScreen";
import HomeScreen from "../screens/HomeScreen";
import ExerciseScreenDetail from "../screens/ExerciseScreenDetail";

// Fonts
Font.loadAsync({
  bungee: require("../assets/fonts/Bungee-Regular.ttf"),
  bvpl: require("../assets/fonts/BeVietnamPro-Light.ttf"),
  bayon: require("../assets/fonts/Bayon-Regular.ttf"),
});

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 2000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Icons/ChestIcon.png")}
        style={styles.splashImage}
      />
    </View>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            position: "absolute",
            borderRadius: 10,
            bottom: 10,
            backgroundColor: "#CE0E2D",
            marginHorizontal: 20,
          },
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/Icons/HomeIcon.png")}
                resizeMode="contain"
                style={{ 
                  width: focused ? 30 : 25, 
                  height: focused ? 30 : 25,
                }} 
              />
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Preset" 
        component={PresetScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/Icons/DBIcon.png")}
                resizeMode="contain"
                style={{ 
                  width: focused ? 30 : 25, 
                  height: focused ? 30 : 25,
                }} 
              />
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Detail" 
        component={ExerciseScreenDetail} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/Icons/DetailIcon.png")}
                resizeMode="contain"
                style={{ 
                  width: focused ? 30 : 25, 
                  height: focused ? 30 : 25,
                }} 
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
