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
    marginRight:"auto",
    color: '#ffffff',
    fontSize: 18,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputDate: {
    width:"70%",
    marginTop:40,
    padding:10,
    height:50,
    borderBottomWidth: 1,
    borderBottomColor:theme.colors.primary,
    color: '#ffffff',
    fontSize: 18,
  },
  iconWrapper: {
    marginTop:40,
  },
  icon: {
    color: theme.colors.primary
  },
  category: {
    color: '#989898',
    marginTop: 40,
    marginLeft: 25,
    fontSize: 18,
  },
  select: {
    width:"90%",
    padding:10,
    height:50,
    borderBottomWidth: 1,
    borderBottomColor:theme.colors.primary,
    marginLeft:"auto",
    marginRight:"auto",
    color: theme.colors.primary,
    fontSize: 18,
  }
})