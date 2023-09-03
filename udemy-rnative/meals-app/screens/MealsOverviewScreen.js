import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, View } from "react-native";
import { MealItem } from "../components/MealItem";
import { useLayoutEffect } from "react";

export const MealsOverviewScreen = ({ route, navigation }) => {
  // const reactRoute = useRoute(); RNative alternative to relying on the "route" passed in as a prop
  // const myparams = route.params.categoryId;
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0,
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
