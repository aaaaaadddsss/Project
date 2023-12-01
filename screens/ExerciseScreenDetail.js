import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";

const ExerciseScreenDetail = ({ navigation, route }) => {
  const { item } = route.params;

  console.log(item);
  return (
    <View style={styles.container}>
      {/* Header Button */}
      <SafeAreaView>
        <Pressable onPress={() => navigation.navigate('Preset')}>
          <Image
            source={require("../assets/Icons/BackButtonIcon.png")}
            style={styles.HeaderButton}
          />
        </Pressable>
      </SafeAreaView>
      <View style={styles.headerColor}>
        {/* Body Parts Image for each Pressable */}
        <View style={styles.box}>
          <Image source={item.image} style={styles.IconImg} />
        </View>
        {/* Body Parts Name for Each Pressable */}
        <Text style={styles.itemName}>{item.name}</Text>
        {/* Exercises for each Body Parts */}
        <View style={styles.exerciseTitle}>
          <Text style={styles.exerciseName}>Exercises: </Text>

          {item.exercises.map((exercise) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <View style={styles.exerciseBullet}></View>
                <Text style={styles.exercisesName}>{exercise}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ExerciseScreenDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24272A",
  },
  headerColor: {
    flex: 1,
    marginTop: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#CE0E2D",
    alignItems: "center",
  },
  box: {
    width: 200,
    height: 200,
    //backgroundColor: "red",
    position: "absolute",
    top: -100,
  },
  IconImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  HeaderButton: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
    marginTop: 30,
  },
  itemName: {
    marginTop: 120,
    fontFamily: "bungee",
    color: "#000",
    fontSize: 35,
  },
  exerciseTitle: {
    marginVertical: 20,
    marginLeft: 20,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  exerciseName: {
    fontSize: 25,
    color: "white",
    fontFamily: "bvpl",
  },
  exerciseBullet: {
    backgroundColor: "#000",
    borderRadius: 10,
    height: 10,
    width: 10,
  },
  exercisesName: {
    fontSize: 20,
    color: "white",
    fontFamily: "bvpl",
    marginLeft: 10,
  },
});
