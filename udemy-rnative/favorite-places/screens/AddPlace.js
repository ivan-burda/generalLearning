import { PlaceForm } from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

export const AddPlace = ({ navigation }) => {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    //keeping this here just for ref; data will not be any longer passed via nav params, but rather loaded from DB
    // navigation.navigate("AllPlaces", {
    //   place: place,
    // });

    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};