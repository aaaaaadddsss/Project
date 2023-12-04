import Modal from "react-native-modal";
import { LineChart } from "react-native-chart-kit";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import CalendarStrip from "react-native-calendar-strip";

const HomeScreen = ({ templates }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workoutDetails, setWorkoutDetails] = useState({});
  const [workoutPlan, setWorkoutPlan] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [weight, setWeight] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [weightData, setWeightData] = useState([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    // Set the initial selected date to the current date when the component mounts
    setSelectedDate(new Date());

    // Manually trigger the selection of the current date
    onDateSelected(new Date());
  }, []);

  const onDateSelected = (date) => {
    setSelectedDate(date);
  };

  const onWeekChanged = (start) => {
    setSelectedDate(start);
  };

  const handleAddWorkout = () => {
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

    // Update weight data
    const weights = Object.values(updatedWorkoutDetails)
      .filter((entry) => entry.weight !== undefined)
      .map((entry) => parseFloat(entry.weight));
    setWeightData(weights);

    // Reset input fields
    setWorkoutPlan("");
    setExerciseType("");
    setWeight("");
  };

  const selectedDateDetails = workoutDetails[selectedDate.toISOString()] || {};

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

          <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
            <Text style={styles.addButtonLabel}>History</Text>
          </TouchableOpacity>

          <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Weight History for the Week</Text>
              <LineChart
                data={{
                  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                  datasets: [
                    {
                      data: weightData,
                    },
                  ],
                }}
                width={350}
                height={200}
                yAxisSuffix="kg"
                chartConfig={{
                  backgroundColor: "#1cc910",
                  backgroundGradientFrom: "#eff3ff",
                  backgroundGradientTo: "#efefef",
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
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
    fontFamily: "bungee"
  },
  formInput: {
    backgroundColor: "white",
    height: 40,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontFamily: "bayon"
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
    fontFamily: "bungee"
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
    fontFamily: "bungee"
  },
  selectedDateDetailsText: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "bvpl"

  },
});

export default HomeScreen;
