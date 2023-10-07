import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { WorkOutSplit } from "../Preset";

const WorkoutSplitFilter = () => {
  return (
    <View>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}>
        {WorkOutSplit.map((split, index) => {
          return (
            <View style={styles.container}>
              <Text style={{ color: "white", fontFamily: 'bvpl' }}>{split.split}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default WorkoutSplitFilter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CE0E2D",
    marginRight: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 16,
  },
});
