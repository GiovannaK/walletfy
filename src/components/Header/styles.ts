import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 91,
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  image: {
    marginTop: 10,
    maxWidth: 120,
    maxHeight: 43,
  },
  greetings: {
    marginTop: 10,
    color: theme.colors.primary,
    fontSize: 20,
  }
})