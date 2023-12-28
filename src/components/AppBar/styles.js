import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  appBarArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBarUser: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textArea: {
    width: "60%",
    gap: 3,
  },
  userName: {
    fontWeight: "800",
  },
  date: {
    color: "gray",
  },
});
export { styles };
