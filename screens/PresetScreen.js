import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import WorkoutSplitFilter from '../components/WorkoutSplitFilter'
import Cards from '../components/Cards'

const PresetScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header headerText={"Recommendations"} />
      
      {/* Workout Split */}
      <View style={styles.container}>
        <WorkoutSplitFilter />
      </View>

      <View style={styles.container1}>
        <Cards />
      </View>
    </SafeAreaView>
  )
}

export default PresetScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#24272A",
  },
  container: {
    marginHorizontal: 20,
  },
  container1: {
    flex: 1,
    marginHorizontal: 50,
  }
})
