// TemplateManager.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import Header from "../components/Header";

const TemplateManager = ({ onUpdateTemplates }) => {
  const [templates, setTemplates] = useState([]);
  const [newTemplateName, setNewTemplateName] = useState("");
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(null);

  const addTemplate = () => {
    if (newTemplateName) {
      const newTemplate = { name: newTemplateName, exercises: [] };
      setTemplates([...templates, newTemplate]);
      setNewTemplateName("");
      onUpdateTemplates([...templates, newTemplate]);
    }
  };

  const addExercise = () => {
    if (exerciseName && currentTemplate !== null) {
      const updatedTemplates = templates.map((template, index) =>
        index === currentTemplate
          ? {
              ...template,
              exercises: [
                ...template.exercises,
                { name: exerciseName, sets, reps, weight },
              ],
            }
          : template
      );
      setTemplates(updatedTemplates);
      setExerciseName("");
      setSets(0);
      setReps(0);
      setWeight(0);
    }
  };

  const deleteExercise = (templateIndex, exerciseIndex) => {
    const updatedTemplates = templates.map((template, index) =>
      index === templateIndex
        ? {
            ...template,
            exercises: [
              ...template.exercises.slice(0, exerciseIndex),
              ...template.exercises.slice(exerciseIndex + 1),
            ],
          }
        : template
    );
    setTemplates(updatedTemplates);
  };

  const updateExercise = () => {
    if (
      exerciseName &&
      currentTemplate !== null &&
      selectedExerciseIndex !== null
    ) {
      const updatedTemplates = templates.map((template, index) =>
        index === currentTemplate
          ? {
              ...template,
              exercises: template.exercises.map((exercise, exerciseIndex) =>
                exerciseIndex === selectedExerciseIndex
                  ? { name: exerciseName, sets, reps, weight }
                  : exercise
              ),
            }
          : template
      );
      setTemplates(updatedTemplates);
      setExerciseName("");
      setSets(0);
      setReps(0);
      setWeight(0);
      setSelectedExerciseIndex(null);
    }
  };

  const toggleAddExercise = () => {
    setShowAddExercise(!showAddExercise);
    if (!showAddExercise) {
      setSelectedExerciseIndex(null); // Reset selected exercise index when hiding the form
    }
  };

  return (
    <ScrollView style={templateStyles.scrollView}>
      <View style={templateStyles.container}>
        <View style={templateStyles.titleContainer}>
          <Text style={templateStyles.sectionTitle}>Workouts</Text>
        </View>
        <FlatList
          data={templates}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={templateStyles.templateItem}
              onPress={() => {
                setCurrentTemplate(index);
                toggleAddExercise();
              }}
            >
              <Text style={templateStyles.templateName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        {currentTemplate !== null && showAddExercise && (
          <ScrollView>
            <View style={templateStyles.exerciseContainer}>
              <Text style={templateStyles.subHeading}>
                Add / Update Exercise
              </Text>
              <TextInput
                style={templateStyles.input}
                placeholder="Exercise Name"
                value={exerciseName}
                onChangeText={(text) => setExerciseName(text)}
              />
              <View style={templateStyles.inputContainer}>
                <Text style={templateStyles.inputLabel}>Sets:</Text>
                <TextInput
                  style={templateStyles.input}
                  placeholder="Sets"
                  keyboardType="numeric"
                  value={sets.toString()}
                  onChangeText={(text) => setSets(parseInt(text) || 0)}
                />
              </View>
              <View style={templateStyles.inputContainer}>
                <Text style={templateStyles.inputLabel}>Reps:</Text>
                <TextInput
                  style={templateStyles.input}
                  placeholder="Reps"
                  keyboardType="numeric"
                  value={reps.toString()}
                  onChangeText={(text) => setReps(parseInt(text) || 0)}
                />
              </View>
              <View style={templateStyles.inputContainer}>
                <Text style={templateStyles.inputLabel}>Weight (kg):</Text>
                <TextInput
                  style={templateStyles.input}
                  placeholder="Weight"
                  keyboardType="numeric"
                  value={weight.toString()}
                  onChangeText={(text) => setWeight(parseInt(text) || 0)}
                />
              </View>
              <TouchableOpacity
                style={templateStyles.addButton}
                onPress={() => {
                  if (selectedExerciseIndex !== null) {
                    updateExercise();
                  } else {
                    addExercise();
                  }
                }}
              >
                <Text style={templateStyles.addButtonText}>
                  {selectedExerciseIndex !== null
                    ? "Update Exercise"
                    : "Add Exercise"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={templateStyles.exerciseContainer}>
              <Text style={templateStyles.subHeading}>Exercises</Text>
              {templates[currentTemplate].exercises.map(
                (exercise, exerciseIndex) => (
                  <View key={exerciseIndex} style={templateStyles.exerciseItem}>
                    <Text style={templateStyles.exerciseText}>
                      {exercise.name} - Sets: {exercise.sets}, Reps:{" "}
                      {exercise.reps}, Weight: {exercise.weight} kg
                    </Text>
                    <View style={templateStyles.exerciseButtons}>
                      <TouchableOpacity
                        style={templateStyles.updateButton}
                        onPress={() => {
                          setExerciseName(exercise.name);
                          setSets(exercise.sets);
                          setReps(exercise.reps);
                          setWeight(exercise.weight);
                          setSelectedExerciseIndex(exerciseIndex);
                        }}
                      >
                        <Text style={templateStyles.buttonText}>Update</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={templateStyles.deleteButton}
                        onPress={() =>
                          deleteExercise(currentTemplate, exerciseIndex)
                        }
                      >
                        <Text style={templateStyles.buttonText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              )}
            </View>
          </ScrollView>
        )}
        <TextInput
          style={templateStyles.input}
          placeholder="New Workout plan"
          value={newTemplateName}
          onChangeText={(text) => setNewTemplateName(text)}
        />
        <TouchableOpacity
          style={templateStyles.addButton}
          onPress={addTemplate}
        >
          <Text style={templateStyles.addButtonText}>Add Workout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const templateStyles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    marginTop: 20,
    margin: 20,
  },
  titleContainer: {
    flex: 1,
    borderBottomWidth: 5,
    borderBottomColor: "#005CB9",
    paddingBottom: 10, 
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 30,
    color: "#CE0E2D",
    marginTop: 20,
    fontFamily: "bungee",
  },
  subHeading: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
    fontFamily: "bungee",
  },
  templateItem: {
    backgroundColor: "#333",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 15
  },
  templateName: {
    color: "white",
    fontFamily: "bayon",
    fontSize: 15,
  },
  exerciseContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "#444",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    color: "white",
    borderRadius: 15
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  inputLabel: {
    color: "white",
    marginRight: 10,
    fontFamily: "bayon",
    fontSize: 20
  },
  addButton: {
    backgroundColor: "#CE0E2D",
    padding: 1,
    alignItems: "center",
    fontFamily: "bungee",
    marginTop: 10,
    borderRadius: 15
  },
  addButtonText: {
    color: "white",
    fontFamily: "bayon",
    fontSize: 23
  },
  exerciseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#555",
    padding: 10,
    marginBottom: 10,
  },
  exerciseText: {
    color: "white",
    fontFamily: "bayon"
  },
  exerciseButtons: {
    flexDirection: "row",
  },
  updateButton: {
    backgroundColor: "#4CAF50",
    padding: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: "#FF5733",
    padding: 5,
  },
  buttonText: {
    color: "white",
    fontFamily: "bayon",
    fontSize: 15
  },
});

export default TemplateManager;
