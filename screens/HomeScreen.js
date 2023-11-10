import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native"; // Import Text
import Header from "../components/Header";
import CalendarStrip from "react-native-calendar-strip";
import TemplateManager from "../components/TemplateManager";

const HomeScreen = () => {
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const onWeekChanged = (start, end) => {
    setSelectedDateRange({ startDate: start, endDate: end });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header headerText="Home" />
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
          onWeekChanged={onWeekChanged}
        />
        
        <TemplateManager />
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
    paddingTop: 20,
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
  workoutText: {
    fontWeight: "bold", 
    color: "white",
    fontSize: 30, 
    textAlign: "left", 
    marginTop: 20, 
    fontFamily: "helvetica",
    marginLeft: 20,
  },
});

export default HomeScreen;
