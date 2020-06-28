import * as React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import {
  canvas2Polar,
  polar2Canvas,
  clamp,
  interpolateColor,
} from "../../components/AnimatedHelpers";
import { StyleGuide } from "../../components";

const THRESHOLD = 0.001;

interface CursorProps {
  r: number;
  strokeWidth: number;
}

const Cursor = ({ r, strokeWidth }: CursorProps) => {
  const center = { x: r, y: r };
  return (
    <View
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          width: strokeWidth,
          height: strokeWidth,
          borderRadius: strokeWidth / 2,
          borderColor: "white",
          borderWidth: 5,
          backgroundColor: StyleGuide.palette.primary,
        },
      ]}
    />
  );
};

export default Cursor;
