import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Examples from "./Examples";
import PanGesture from "./PanGesture";
import Transitions from "./Transitions";
import CircularSlider from "./CircularSlider";
import Graph from "./Graph";
import Worklets from "./Worklets";

const Stack = createStackNavigator<Routes>();
const AppNavigator = () => (
  <>
    <Stack.Navigator>
      <Stack.Screen
        name="Examples"
        component={Examples}
        options={{
          title: "Learn Reanimated 2",
        }}
      />
      <Stack.Screen
        name="Worklets"
        component={Worklets}
        options={{
          title: "Worklets",
        }}
      />
      <Stack.Screen
        name="PanGesture"
        component={PanGesture}
        options={{
          title: "PanGesture",
        }}
      />
      <Stack.Screen
        name="Transitions"
        component={Transitions}
        options={{
          title: "Transitions",
        }}
      />
      <Stack.Screen
        name="CircularSlider"
        component={CircularSlider}
        options={{
          title: "Circular Slider",
        }}
      />
      <Stack.Screen
        name="Graph"
        component={Graph}
        options={{
          title: "Graph",
        }}
      />
    </Stack.Navigator>
  </>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;
