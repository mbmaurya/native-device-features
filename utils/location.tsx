const GOOGLE_API_KEY = "";

interface getMapPreviewProps {
  lat: number;
  long: number;
}

function getMapPreview({ lat, long }: getMapPreviewProps) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${long}&key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
}

export async function getAddress(lat: number, lng: number) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error("Failed to fetch response")
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}

export default getMapPreview;
