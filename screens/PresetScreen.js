import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const PresetScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"Recommendations"} />
    </SafeAreaView>
  )
}

export default PresetScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24272A",
  }
})