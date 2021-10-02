import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.bg
  },
  image: {
    marginTop: 30
  },
  border: {
    marginTop: 30,
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
    marginTop: 60,
  },
  googleBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 30,
    width: '90%',
    padding: 10,
    height: 50,
  }
})