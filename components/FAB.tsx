import { Text, StyleSheet, Pressable } from "react-native";

interface Props {
    onPress?: () => void;
    onLongPress?: () => void;
    label?: string;
}

const FAB = ({ onPress, onLongPress, label }: Props) => {
  return (
    <Pressable
      style={styles.floatingButton}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.textFloatingButton}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 100,
    position: "absolute",
    bottom: 50,
    right: 50,
    shadowColor: "#373737",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  textFloatingButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FAB;
