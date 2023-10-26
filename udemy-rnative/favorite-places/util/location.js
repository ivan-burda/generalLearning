const GOOGLE_API_KEY = "AIzaSyCBnawTeOf0cVa7m7aKFQoIqrXbJOorW2c";

export const getMapPreview = (lat, lng) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
};
