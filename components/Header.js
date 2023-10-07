import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";


const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>{headerText}</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome name={headerIcon} size={24} color="white" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#005CB9",
    marginHorizontal: 20
  },
  sectionTitle: {
    fontSize: 35,
    color: "#CE0E2D",
  },
  iconContainer: {
  }
});
