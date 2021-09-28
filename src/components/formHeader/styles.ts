import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 120,
    width: '100%',
    
  },
  image: {
    marginTop: 10,
    width: 164,
    height: 56,
  },
  title: {
    marginTop: 10,
    color: theme.colors.primary,
    fontSize: 22,
    fontWeight: 'bold'
  }
})