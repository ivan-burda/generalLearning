import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";
// import { useContext, useLayoutEffect } from "react";
import { IconButton } from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { useLayoutEffect } from "react";

export const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const favoriteMealsContext = useContext(FavoritesContext);
  // const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const mealIsFavorite = favoriteMealIds.includes(mealId);
  const dispatch = useDispatch();

  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsContext.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsContext.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            title="Tap me"
            onPress={changeFavoritesStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "95%",
    height: 250,
    alignSelf: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
