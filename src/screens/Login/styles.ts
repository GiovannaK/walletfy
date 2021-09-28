import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.bg
  },
  image: {
    marginTop: 58
  },
  border: {
    marginTop: 45,
    minHeight: '100%',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
  },
  svg: {
    maxWidth: 322,
    maxHeight: 198,
    marginTop: 40,
  },
  googleBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 80,
    width: 320,
    backgroundColor: theme.colors.google,
    height: 60,
    borderRadius: 15,
    justifyContent: 'space-around',
  },
  icon: {
    color: '#ffffff',
  },
  googleBtnText: {
    color: '#ffffff',
    fontSize: 20
  }
})