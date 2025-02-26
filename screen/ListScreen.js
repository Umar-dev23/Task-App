import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Button } from "react-native-paper";
import { TaskContext } from "./../utils/TaskContext"; // Import the context

const ListScreen = ({ navigation }) => {
  const tasks = [
    { id: "1", title: "Wake up" },
    { id: "2", title: "Exercise" },
    { id: "3", title: "Breakfast" },
    { id: "4", title: "Work" },
    { id: "5", title: "Sleep" },
  ];

  const { selectedTask, setSelectedTask } = useContext(TaskContext); // Use context

  const { taskSelected, settaskSlected } = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TASKS LIST</Text>
      <Text style={styles.paragraph}>
        Select a Task that is currently happening!
      </Text>
      <FlatList
        style={styles.flatlist}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.flatlistItem,
              selectedTask?.id === item.id && styles.selectedItem,
            ]}
            onPress={() => {
              setSelectedTask(item); // Update selected task globally
              navigation.navigate("showTaskScreen", { selectedTask1: item });
            }}
          >
            <Text style={styles.flatlistItemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("ContactSupport")}
      >
        Go to Task 3 - Linking API
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
    fontSize: 14,
    fontWeight: "600",
    color: "#3939",
    marginBottom: 20,
    marginTop: 40,
  },
  flatlist: { marginTop: 20, borderTopWidth: 1, borderTopColor: "#ccc" },
  flatlistItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  flatlistItemText: { fontSize: 16, color: "#333" },
  selectedItem: { backgroundColor: "green" },
  button: {
    backgroundColor: "#FF7B7B",
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    color: "#fff",
  },
});

export default ListScreen;
