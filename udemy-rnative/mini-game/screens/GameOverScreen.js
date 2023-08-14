import { Text, View, Image, StyleSheet } from "react-native";
import { Title } from "../components/ui/Title";
import { Colors } from "../constants/colors";
import { PrimaryButton } from "../components/ui/PrimaryButton";

export const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => (
  <View style={styles.rootContainer}>
    <Title>Game over!</Title>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/images/success.png")}
        style={styles.image}
      />
    </View>
    <Text style={styles.summaryText}>
      Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
      rounds to guess the number{" "}
      <Text style={styles.highlight}>{userNumber}</Text>.
    </Text>
    <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
  </View>
);

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 10,
  },
  highlight: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
