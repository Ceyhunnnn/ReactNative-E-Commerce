import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const childWidth = (width - 60) / 2;
const styles = StyleSheet.create({
  productCard: {
    marginTop: 20,
    marginHorizontal: 5,
    minWidth: childWidth,
    maxWidth: childWidth,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productBg: {
    backgroundColor: "#eaeaea",
    width: "95%",
    height: 130,
    borderRadius: 10,
  },
  prodcutImageArea: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  heartIcon: {
    position: "absolute",
    top: 5,
    right: 10,
  },
  prodcutImage: {
    width: 110,
    height: 110,
  },
  productName: {
    marginVertical: 5,
    fontWeight: "600",
  },
  productPrice: {
    fontWeight: "600",
    color: "gray",
    marginVertical: 5,
  },
});
export { styles };
