import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { MealsList } from "../components/MealsList/MealsList";

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

  return <MealsList items={displayedMeals} />;
};
