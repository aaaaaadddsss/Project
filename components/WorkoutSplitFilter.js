import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { WorkOutSplit } from "../Preset";

const WorkoutSplitFilter = ({ onSelectCategory, selectedCategory }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {WorkOutSplit.map((split, index) => {
        return (
          <View style={styles.container} key={split.id}>
            <Text
              style={{
                color: selectedCategory === split.split ? "red" : "white",
                fontFamily: "bvpl",
              }}
              onPress={() => onSelectCategory(split.split)}
            >
              {split.split}
            </Text>
          </View>
        );
      })}
    </ScrollView>
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
