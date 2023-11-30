import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TemplateManager from "../components/TemplateManager";

const CreateTemplateScreen = () => {
  const [templates, setTemplates] = useState([]);

  const updateTemplates = (updatedTemplates) => {
    setTemplates(updatedTemplates);
  };

  return (
    <View style={styles.container}>
      <TemplateManager onUpdateTemplates={updateTemplates} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24272A",
  },
});

export default CreateTemplateScreen;
