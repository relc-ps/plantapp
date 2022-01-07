import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Explore from "./screens/Explore";
import Browser from "./screens/Browser";
import Product from "./screens/Product";
import Settings from "./screens/Settings";
import { Image } from "react-native";

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
