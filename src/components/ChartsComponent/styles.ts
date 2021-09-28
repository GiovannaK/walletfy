import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  /*   card: {
      backgroundColor: theme.colors.secondary,
      width: 320,
      height: 185,
      borderRadius: 20,
      marginBottom: 20,
    } */
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.primary,
    fontSize: 18,
  }
})