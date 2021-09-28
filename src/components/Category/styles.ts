import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 29,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  card: {
    width: 127,
    height: 116,
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  image: {
    maxWidth: 75,
    maxHeight: 73,
    marginTop: 3,
  },
  text: {
    marginTop: 10,
    color: theme.colors.primary,
  }
})