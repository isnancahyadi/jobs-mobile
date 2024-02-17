import React, { FC } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  DimensionValue,
} from "react-native";

import styles from "./screenheader.style";

type ComponentType = {
  iconUrl: ImageSourcePropType;
  dimension: DimensionValue;
  handlePress?: void;
};

const ScreenHeaderBtn: FC<ComponentType> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
