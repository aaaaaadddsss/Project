import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import CalendarStrip from "react-native-calendar-strip";

const HomeScreen = ({ templates }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workoutDetails, setWorkoutDetails] = useState({});
  const [workoutPlan, setWorkoutPlan] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [weight, setWeight] = useState("");

  const onDateSelected = (date) => {
    setSelectedDate(date);
  };

  const onWeekChanged = (start, end) => {
    // For simplicity, let's use the start date of the week
    setSelectedDate(start);
  };

  const handleAddWorkout = () => {
    // Store workout details for the selected date
    const updatedWorkoutDetails = {
      ...workoutDetails,
      [selectedDate.toISOString()]: {
        workoutPlan,
        exerciseType,
        weight,
      },
    };

    // Update state with the new workout details
    setWorkoutDetails(updatedWorkoutDetails);

    // Reset input fields
    setWorkoutPlan("");
    setExerciseType("");
    setWeight("");
  };

  // Get workout details for the selected date
  const selectedDateDetails =
    workoutDetails[selectedDate.toISOString()] || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header headerText="Home" />

        {/* Display workout templates */}
        {templates.map((template, index) => (
          <View key={index} style={styles.workoutContainer}>
            <Text style={styles.workoutTitle}>{template.name}</Text>
            {/* Add more details as needed */}
          </View>
        ))}

        {/* Calendar */}
        <CalendarStrip
          calendarAnimation={{ type: "sequence", duration: 30 }}
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          style={styles.calendar}
          calendarHeaderStyle={styles.calendarHeader}
          dateNumberStyle={styles.dateText}
          dateNameStyle={styles.dateText}
          highlightDateNumberStyle={styles.highlightDateText}
          highlightDateNameStyle={styles.highlightDateText}
          onDateSelected={onDateSelected}
          onWeekChanged={onWeekChanged}
        />

        {/* Workout Plan Form */}
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>Workout Plan:</Text>
          <TextInput
            style={styles.formInput}
            value={workoutPlan}
            onChangeText={(text) => setWorkoutPlan(text)}
          />

          <Text style={styles.formLabel}>Exercise Type:</Text>
          <TextInput
            style={styles.formInput}
            value={exerciseType}
            onChangeText={(text) => setExerciseType(text)}
          />

          <Text style={styles.formLabel}>Weight (KG):</Text>
          <TextInput
            style={styles.formInput}
            value={weight}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddWorkout}>
            <Text style={styles.addButtonLabel}>Add Workout Plan</Text>
          </TouchableOpacity>
        </View>

        {/* Display workout details for the selected date */}
        <View style={styles.selectedDateDetailsContainer}>
          <Text style={styles.selectedDateDetailsLabel}>
            Selected Date Details:
          </Text>
          <Text style={styles.selectedDateDetailsText}>
            Workout Plan: {selectedDateDetails.workoutPlan || "-"}
          </Text>
          <Text style={styles.selectedDateDetailsText}>
            Exercise Type: {selectedDateDetails.exerciseType || "-"}
          </Text>
          <Text style={styles.selectedDateDetailsText}>
            Weight (KG): {selectedDateDetails.weight || "-"}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24272A",
  },
  content: {
    flex: 1,
    paddingBottom: 10,
  },
  calendar: {
    height: 100,
  },
  calendarHeader: {
    paddingTop: 20,
    paddingBottom: 5,
    color: "white",
  },
  dateText: {
    color: "white",
  },
  highlightDateText: {
    color: "yellow",
  },
  workoutContainer: {
    marginBottom: 20,
  },
  workoutTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    marginTop: 10,
    marginLeft: 20,
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  formLabel: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  formInput: {
    backgroundColor: "white",
    height: 40,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: "#CE0E2D",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonLabel: {
    color: "white",
    fontWeight: "bold",
  },
    selectedDateDetailsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  selectedDateDetailsLabel: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedDateDetailsText: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
});

export default HomeScreen;
