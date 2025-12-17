import { Image, Pressable, Text, View } from "react-native";
import { PlaceProps } from "../../utils/type";

interface PlaceItemProps extends PlaceProps {
  onSelect: () => void;
}

function PlaceItem(props: PlaceItemProps) {
  const { title, address, imageUri, onSelect } = props;
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;
