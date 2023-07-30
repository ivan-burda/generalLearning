import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export const GoalItem = ({ text }) => (
  <View style={styles.goalItem}>
    <Text style={styles.goalText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
