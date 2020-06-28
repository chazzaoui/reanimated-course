import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { mix } from "../../components/AnimatedHelpers";
import { Card, Cards, StyleGuide } from "../../components";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const origin = -(width / 2 - StyleGuide.spacing * 2);
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    padding: StyleGuide.spacing * 4,
  },
});

interface AnimatedCardProps {
  transition: any;
  index: number;
  card: Cards;
}

const AnimatedCard = ({ card, transition, index }: AnimatedCardProps) => {
  const style = useAnimatedStyle(() => {
    const rotate = mix(transition.value, 0, ((index - 1) * Math.PI) / 6);
    return {
      transform: [{ translateX: origin }, { rotate }, { translateX: -origin }],
    };
  });
  return (
    <Animated.View style={[styles.overlay, style]}>
      <Card {...{ card }} />
    </Animated.View>
  );
};

export default AnimatedCard;
