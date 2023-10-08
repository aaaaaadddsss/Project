import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import WorkoutSplitFilter from "../components/WorkoutSplitFilter";
import Cards from "../components/Cards";
import { useNavigation } from "@react-navigation/native";

const PresetScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header headerText={"Recommendations"} />

      {/* Workout Split */}
      <View style={styles.container}>
        <WorkoutSplitFilter
          onSelectCategory={handleCategoryPress}
          selectedCategory={selectedCategory}
        />
      </View>

      <View style={styles.container1}>
        <Cards selectedCategory={selectedCategory} />
      </View>
    </SafeAreaView>
  );
};

export default PresetScreen;

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
    marginHorizontal: 45,
  },
});
