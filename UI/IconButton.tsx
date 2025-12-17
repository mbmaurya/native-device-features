import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

interface IconButtonProps extends IconProps<any> {
  size: number;
  color: string;
  onPress: () => void;
}

function IconButton(props: IconButtonProps) {
  const { name, size, color, onPress, ...rest } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={name} size={size} color={color} {...rest} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
