import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { exerciseList } from "../Preset";

const Cards = () => {
  return (
    <View>
      <FlatList
        data={exerciseList}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.textStyle}> {item.name}</Text>
          </View>
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
    borderRadius: 15,
    marginVertical: 9,
    alignItems: "center",
    //marginHorizontal: 30,
    paddingVertical: 20,
  },
  textStyle: {
    color: "white",
    fontFamily: "bvpl",
    fontSize: 20,
    paddingVertical: 20,
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: "center",
  },
});
