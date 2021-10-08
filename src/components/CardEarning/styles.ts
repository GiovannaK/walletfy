import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  card: {
    backgroundColor: theme.colors.secondary,
    maxHeight: 98,
    minWidth: 320,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  cardHeader: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    flexBasis: '33.3%'
  },
  date: {
    color: '#989898',
    flexBasis: '40%',
    fontSize: 14
  },
  category: {
    marginTop: 10,
    color: '#989898',
    flexBasis: '40%',
    fontSize: 18
  },
  month: {
    marginTop: 10,
    color: '#989898',
    flexBasis: '38%',
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    marginTop: 10,
    color: theme.colors.primary,
  }
})