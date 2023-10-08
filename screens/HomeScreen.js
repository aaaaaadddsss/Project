import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header headerText={"Home"} />
        {/* Other content for the HomeScreen */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24272A",
  },
  content: {
    flex: 1,
  },
});
