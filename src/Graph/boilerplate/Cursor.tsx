import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Path, withDecay } from "../../components/AnimatedHelpers";

const { width } = Dimensions.get("window");
const CURSOR = 100;
const styles = StyleSheet.create({
  cursorContainer: {
    width: CURSOR,
    height: CURSOR,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "rgba(100, 200, 300, 0.4)",
  },
  cursor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#367be2",
    borderWidth: 4,
    backgroundColor: "white",
  },
});

interface CursorProps {
  path: Path;
}

const Cursor = ({ path }: CursorProps) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.cursor} />
    </View>
  );
};

export default Cursor;
