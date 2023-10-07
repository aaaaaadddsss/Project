import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { exerciseList } from '../Preset'


const Cards = () => {
  return (
    <View>
      <FlatList data={exerciseList} />
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({})