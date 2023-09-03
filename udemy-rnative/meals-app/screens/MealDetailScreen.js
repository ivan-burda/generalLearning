import { Text } from "react-native";
export const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  return <Text>meal details screen {mealId}</Text>;
};
