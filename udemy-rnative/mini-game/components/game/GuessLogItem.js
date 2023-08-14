import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

export const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    border: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4, //android
    shadowColor: "black", //ios
    shadowOffset: { width: 0, height: 0 }, //ios
    shadowOpacity: 0.25, //ios
    shadowRadius: 3, //ios
  },
});
