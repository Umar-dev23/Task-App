import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { TaskContext } from "./../utils/TaskContext"; // Import the context

const ShowTaskScreen = ({ navigation, route }) => {
  const { selectedTask } = useContext(TaskContext); // Use context to get const 
    const { selectedTask1 } = route.params; // Get selected task from route params
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Using Props</Text>
        <Text style={styles.paragraph}>{selectedTask ? selectedTask.title : "No task selected"}</Text>

      <Text style={styles.title}>Using Context API</Text>
      <Text style={styles.paragraph}>
        {selectedTask ? selectedTask.title : "No task selected"}
      </Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("ListScreen")}
      >
        Go Back
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#FF7B7B",
    marginBottom: 20,
    marginTop: 40,
  },
  paragraph: {
    fontSize: 44,
    fontWeight: "600",
    color: "#3939",
    marginBottom: 20,
    marginTop: 40,
  },
  button: {
    backgroundColor: "#FF7B7B",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default ShowTaskScreen;
