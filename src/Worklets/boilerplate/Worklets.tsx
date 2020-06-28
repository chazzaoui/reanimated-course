import React, { useState } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { useSharedValue, runOnUI } from "react-native-reanimated";

import { Button } from "../../components";
import { ReText } from "../../components/AnimatedHelpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

const formatDatetime = (datetime) => {
  "worklet";
  return datetime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const sayHello = (text, from, cb) => {
  "worklet";
  text.value = `Hello from ${from} on ${Platform.OS} at ${formatDatetime(
    new Date()
  )}`;
  cb(`Hello from ${from} on ${Platform.OS} at ${formatDatetime(new Date())}`);
};

const Worklets = () => {
  return (
    <View style={styles.container}>
      <Button label="Say Hello" primary />
    </View>
  );
};

export default Worklets;
