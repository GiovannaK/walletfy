import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.bg
  },
  form: {
    marginTop: 10,
    width: '100%'
  },
  input: {
    width:"90%",
    marginTop:40,
    padding:10,
    height:50,
    borderBottomWidth: 1,
    borderBottomColor:theme.colors.primary,
    marginLeft:"auto",
    marginRight:"auto"
  },
  inputDate: {
    width: '80%'
  }
})