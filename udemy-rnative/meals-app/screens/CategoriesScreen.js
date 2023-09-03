import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";

export const CategoriesScreen = ({ navigation }) => {
  // Function for rendering a list item
  function renderCategoryItem(itemData) {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
