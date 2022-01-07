import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Image } from "react-native";
import Welcome from "./../screens/Welcome";

const screens = createStackNavigator(
  {
    Welcome,
    // Login,
    // Explore,
    // Browser,
    // Product,
    // Settings,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    },
  }
);

export default createAppContainer(screens);
