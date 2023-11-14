import { PlaceForm } from "../components/Places/PlaceForm";

export const AddPlace = ({ navigation }) => {
  async function createPlaceHandler(place) {
    // await insertPlace(place);
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};