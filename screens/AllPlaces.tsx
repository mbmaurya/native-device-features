import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { LocationProps } from "../models/Place";
import { useIsFocused } from "@react-navigation/native";
import { PlaceProps } from "../utils/type";



function AllPlaces({route}: {route: any}) {
  const [loadedPlaces, setLoadedPlaces] = useState<PlaceProps[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused && route.params) {
      setLoadedPlaces(curPlaces => [...curPlaces, route.params.place])
    }
  },[isFocused, route])

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
