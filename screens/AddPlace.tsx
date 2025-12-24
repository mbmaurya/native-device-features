import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";
import ImagePicker from "../components/Places/ImagePicker";
import LocationPicker from "../components/Places/LocationPicker";
import Button from "../UI/Button";
import { Place } from "../models/Place";

function AddPlace({navigation}:{navigation: any}) {
  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [pickedLocation, setPickedLocation] = useState<{lat: number, lng: number} | null>(null)

  function changeTitleHandler(enteredText: string) {
    setEnteredTitle(enteredText);
  }

  function takeImageHandler(imageUri: string) {
    setSelectedImage(imageUri)
  }

  const pickLocationHandler = useCallback((location: {lat: number, lng: number}) => {
    setPickedLocation(location)
  },[])

  function createPlaceHandler(place: Place) {
    navigation.navigate('AllPlaces', {place: place})
  }

  function savePlaceHandler() {
    const placeData = new Place(enteredTitle, selectedImage, pickedLocation)
    createPlaceHandler(placeData)
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default AddPlace;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
