import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { exerciseList } from "../Preset";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ selectedCategory }) => {
  // Filter exerciseList based on the selected category
  const filteredExerciseList = selectedCategory
    ? exerciseList.filter((item) => item.category === selectedCategory)
    : exerciseList;

  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={filteredExerciseList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("ExerciseScreenDetail", { item: item })
            }
          >
            <View style={styles.container}>
              <Image source={item.image} style={styles.img} />
              <Text style={styles.textStyle}> {item.name}</Text>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    marginVertical: 9,
    alignItems: "center",
    //marginHorizontal: 30,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  textStyle: {
    color: "#fff",
    fontFamily: "bayon",
    fontSize: 20,
    letterSpacing: 4.5,
    paddingVertical: 20,
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: "center",
  },
});
