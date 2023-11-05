import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { OutlinedButton } from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useEffect, useMemo, useState } from "react";
import { getMapPreview } from "../../util/location";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

export const LocationPicker = ({ onPickLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null);
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const route = useRoute();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const mapPickedLocation = useMemo(() => {
    return {
      lat: route.params?.pickedLat ?? 0,
      lng: route.params?.pickedLng ?? 0,
    };
  }, [route.params]);

  useEffect(() => {
    if (isFocused && route.params) {
      setPickedLocation(mapPickedLocation);
    }
  }, [mapPickedLocation, isFocused, route.params]);

  useEffect(() => {
    onPickLocation(pickedLocation);
  }, [pickedLocation, onPickLocation]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions",
        "You need to grant location permission to use this app",
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  let locationPreview = <Text>No location picket yet</Text>;
  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
