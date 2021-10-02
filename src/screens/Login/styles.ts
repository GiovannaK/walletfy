import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.bg
  },
  image: {
    marginTop: 50
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
    maxWidth: 300,
    maxHeight: 120,
    marginTop: 30,
  },
  googleBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    width: 320,
    backgroundColor: theme.colors.bg,
    height: 60,
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  icon: {
    color: '#ffffff',
  },
  googleBtnText: {
    color: theme.colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  input: {
    width: '90%',
    marginTop: 30,
    padding: 15,
    height: 50,
    backgroundColor: theme.colors.bg,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#ffffff',
  },
  linkContainer: {
    marginTop: 10,
  },
  link: {
    fontSize: 17,
  }
})