import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { Button, StyleGuide, cards } from "../../components";
import { useSpringTransition } from "../../components/AnimatedHelpers";
import AnimatedCard from "./AnimatedCard";
import {
  useSharedValue,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
    justifyContent: "flex-end",
  },
});

const useSpring = (state, config) => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [state, value]);
  return useDerivedValue(() => {
    return withSpring(value.value, config);
  });
};
const useTiming = (state, config) => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [state, value]);
  return useDerivedValue(() => {
    return withTiming(value.value, config);
  });
};

const UseTransition = () => {
  const toggled = useSharedValue(false);
  const transition = useDerivedValue(() => {
    return withSpring(toggled.value);
  });
  return (
    <View style={styles.container}>
      {cards.slice(0, 3).map((card, index) => (
        <AnimatedCard key={card} {...{ index, card, transition }} />
      ))}
      <Button
        label={toggled.value ? "Reset" : "Start"}
        primary
        onPress={() => (toggled.value = !toggled.value)}
      />
    </View>
  );
};

export default UseTransition;
