import * as React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import {
  canvas2Polar,
  polar2Canvas,
  clamp,
} from "../components/AnimatedHelpers";
import { StyleGuide } from "../components";

const THRESHOLD = 0.001;

interface CursorProps {
  r: number;
  strokeWidth: number;
  theta: any;
}

const Cursor = ({ r, strokeWidth, theta }: CursorProps) => {
  const center = { x: r, y: r };
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offset = polar2Canvas(
        {
          theta: theta.value,
          radius: r,
        },
        center
      );
    },
    onActive: (event, ctx) => {
      const { translationX, translationY } = event;
      const x = ctx.offset.x + translationX;
      const y1 = ctx.offset.y + translationY;
      const y =
        x < r
          ? y1
          : theta.value < Math.PI
          ? clamp(y1, 0, r - THRESHOLD)
          : clamp(y1, r, 2 * r);
      const value = canvas2Polar({ x, y }, center).theta;
      theta.value = value > 0 ? value : 2 * Math.PI + value;
    },
  });
  const style = useAnimatedStyle(() => {
    const { x: translateX, y: translateY } = polar2Canvas(
      {
        theta: theta.value,
        radius: r,
      },
      center
    );
    return {
      transform: [{ translateX }, { translateY }],
    };
  });
  return (
    <PanGestureHandler {...{ onGestureEvent }}>
      <Animated.View
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
          style,
        ]}
      />
    </PanGestureHandler>
  );
};

export default Cursor;
