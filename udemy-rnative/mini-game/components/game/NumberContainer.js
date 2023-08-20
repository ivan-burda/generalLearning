import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { Colors } from "../../constants/colors";

export const NumberContainer = ({ children }) => {
  const { width, height } = useWindowDimensions();
  const marginBottomNumber = height < 380 ? 0 : 12;
  return (
    <View style={[styles.container, { marginBottom: marginBottomNumber }]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: "bold",
  },
});
