export interface LocationProps {
  lat?: number,
  lng?: number,
  address?: string
}

export class Place {
  title?: string;
  imageUri?: string;
  address?: string;
  location?: LocationProps | null;
  id?: string;
  constructor(
    title?: string,
    imageUri?: string,
    location?: LocationProps | null
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location?.address;
    this.location = {lat: location?.lat, lng: location?.lng};
    this.id = new Date().toString() + Math.random().toString();
  }
}
