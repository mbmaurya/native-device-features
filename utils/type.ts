import { LocationProps } from "../models/Place";

export interface PlaceProps {
  title?: string;
  imageUri?: string;
  address?: string;
  location?: LocationProps;
  id?: string;
}
