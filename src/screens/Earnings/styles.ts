import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.bg,
  },
  titleSection: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  icon: {
    color: theme.colors.primary,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 24,
    fontWeight: 'bold'
  },
  panelContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  panel: {
    minWidth: 150,
    maxWidth: 150,
    minHeight: 116,
    maxHeight: 116,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    alignItems: 'center',
  },
  panelTitle: {
    color: theme.colors.primary,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  },
  panelInfo: {
    color: theme.colors.primary,
    marginTop: 20,
    fontSize: 18
  }
})