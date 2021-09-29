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
    marginTop:25,
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
    marginTop:25,
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
    marginTop: 30,
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
  },
  checkWrapper: {
    flexDirection: 'row',
    marginLeft: 25,
    marginTop: 20,
    alignItems: 'center',
    marginRight: 20,
    justifyContent: 'space-between'
  },
  checkLabel: {
    color: '#989898',
    fontSize: 18,
  },
  checkbox: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  saveButton: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
    width: 300,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  delete: {
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 25,
    right: 20,
    backgroundColor: '#f92e6a',
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  iconButton: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
  }
})