import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { LocationProps } from "../models/Place";
import { useIsFocused } from "@react-navigation/native";
import { PlaceProps } from "../utils/type";
import { fetchPlaces } from "../utils/database";

function AllPlaces({ route }: { route: any }) {
  const [loadedPlaces, setLoadedPlaces] = useState<PlaceProps[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const result: any = await fetchPlaces();
      setLoadedPlaces(result);
    }
    if (isFocused) {
      setTimeout(() => {
        loadPlaces();
      }, 300);
    }
  }, []);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
