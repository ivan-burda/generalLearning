import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import { OutlinedButton } from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";
import { useEffect } from "react";

export const PlaceDetails = ({ route }) => {
  const showOnMapHandler = () => {};
  const selectedPlaceId = route.params.placeId;
  useEffect(() => {
    //use selectedPlaceId to fetch data for the place
  }, [selectedPlaceId]);
  return (
    <ScrollView>
      <Image styles={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Address</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});