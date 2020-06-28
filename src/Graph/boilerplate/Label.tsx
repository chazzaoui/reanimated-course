import React from "react";
import { View, StyleSheet } from "react-native";
import { useDerivedValue } from "react-native-reanimated";

import { ReText, round } from "../../components/AnimatedHelpers";
import { StyleGuide } from "../../components";

const styles = StyleSheet.create({
  date: {
    ...StyleGuide.typography.title3,
    textAlign: "center",
  },
  price: {
    ...StyleGuide.typography.title2,
    textAlign: "center",
  },
});

interface LabelProps {
  point: any;
}

const Label = ({ point }: LabelProps) => {
  return <View />;
};

export default Label;
