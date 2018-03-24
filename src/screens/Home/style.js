const React = require("react-native");
const { Platform, Dimensions } = React;

const y = Dimensions.get("window").height;
const x = Dimensions.get("window").width;

export default {
  drawerCover: { 
    height: y / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  Images: {
    position: "absolute",
    width: x,
    height: y / 2,
    resizeMode: "center"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 15,
    marginBottom: 7,
    marginTop: 7,
    color: '#E6E6E6'
  },
  smallerText: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 10,
    marginBottom: 7,
    marginTop: 7,
    color: '#E6E6E6',
    textAlign: 'center'
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  }
};
