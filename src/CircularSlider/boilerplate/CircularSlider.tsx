import React from "react";
import {
  Dimensions,
  PixelRatio,
  StyleSheet,
  View,
  processColor,
} from "react-native";
import Animated, {
  useSharedValue,
  useDerivedValue,
  interpolate,
} from "react-native-reanimated";

import Cursor from "./Cursor";
import CircularProgress from "./CircularProgress";
import { StyleGuide } from "../../components";
import {
  interpolateColor,
  canvas2Polar,
} from "../../components/AnimatedHelpers";

const { width } = Dimensions.get("window");
const size = width - 32;
const STROKE_WIDTH = 40;
const r = PixelRatio.roundToNearestPixel(size / 2);
const defaultTheta = canvas2Polar({ x: 0, y: 0 }, { x: r, y: r }).theta;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: r * 2,
    height: r * 2,
  },
});

const CircularSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <CircularProgress strokeWidth={STROKE_WIDTH} {...{ r }} />
        </Animated.View>
        <Cursor strokeWidth={STROKE_WIDTH} r={r - STROKE_WIDTH / 2} />
      </View>
    </View>
  );
};

export default CircularSlider;
