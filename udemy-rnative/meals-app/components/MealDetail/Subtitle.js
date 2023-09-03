import { Text, View, StyleSheet } from "react-native";

export const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#f5d2bc",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#f5d2bc",
    borderBottomWidth: 2,
  },
});
