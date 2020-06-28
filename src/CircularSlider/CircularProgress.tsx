import React from "react";
import { StyleSheet, processColor } from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  interpolate,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { StyleGuide } from "../components";

const { PI } = Math;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
  theta: Animated.Node<number>;
  r: number;
  strokeWidth: number;
}

const CircularProgress = ({ theta, r, strokeWidth }: CircularProgressProps) => {
  const radius = r - strokeWidth / 2;
  const circumference = radius * 2 * PI;
  const props = useAnimatedProps(() => {
    return {
      strokeDashoffset: theta.value * radius,
    };
  });
  return (
    <Svg style={StyleSheet.absoluteFill}>
      <Circle
        cx={r}
        cy={r}
        fill="transparent"
        stroke="white"
        r={radius}
        {...{ strokeWidth }}
      />
      <AnimatedCircle
        animatedProps={props}
        cx={r}
        cy={r}
        fill="transparent"
        r={radius}
        stroke={StyleGuide.palette.primary}
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ strokeWidth }}
      />
    </Svg>
  );
};

export default CircularProgress;
