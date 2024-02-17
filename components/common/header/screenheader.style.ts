import { DimensionValue, ImageStyle, StyleSheet, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

type StyleType = {
  btnContainer: ViewStyle;
  btnImg: (dimension: DimensionValue) => ImageStyle;
}

const styles: StyleType = {
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
};

export default styles;
