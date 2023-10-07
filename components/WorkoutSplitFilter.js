import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { WorkOutSplit } from "../Preset";

const WorkoutSplitFilter = () => {
  return (
    <View>
      <ScrollView horizontal>
        {WorkOutSplit.map((split, index) => {
          return (
            <View style={styles.container}>
              <Text>{split.split}</Text>
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
  },
});
