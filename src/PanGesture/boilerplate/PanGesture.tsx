import React from "react";
import { View, StyleSheet } from "react-native";

import { Card, Cards, CARD_WIDTH, CARD_HEIGHT } from "../../components";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { withDecay, clamp } from "../../components/AnimatedHelpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface GestureProps {
  width: number;
  height: number;
}

const Gesture = ({ width, height }: GestureProps) => {
  return (
    <View style={styles.container}>
      <Card card={Cards.Card1} />
    </View>
  );
};

export default Gesture;
