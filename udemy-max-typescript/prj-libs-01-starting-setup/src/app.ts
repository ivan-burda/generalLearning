// Code goes here!
import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyAGFwQ_AWvOwBlzDFuaibkbbajtwfo0Ux0";

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}
  `
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location");
      }
      const coordinate = response.data.results[0].geometry.location;
      console.log(coordinate);
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}

form?.addEventListener("submit", searchAddressHandler);
