import React, { Component } from "react";
import Navigation from "./navigation";
import { Asset } from "expo-asset";
import Block from "./components/Block";
import AppLoading from "expo-app-loading";

// import all used images
const images = [
  require("./assets/icons/back.png"),
  require("./assets/icons/plants.png"),
  require("./assets/icons/seeds.png"),
  require("./assets/icons/flowers.png"),
  require("./assets/icons/sprayers.png"),
  require("./assets/icons/pots.png"),
  require("./assets/icons/fertilizers.png"),
  require("./assets/images/plants_1.png"),
  require("./assets/images/plants_2.png"),
  require("./assets/images/plants_3.png"),
  require("./assets/images/explore_1.png"),
  require("./assets/images/explore_2.png"),
  require("./assets/images/explore_3.png"),
  require("./assets/images/explore_4.png"),
  require("./assets/images/explore_5.png"),
  require("./assets/images/explore_6.png"),
  require("./assets/images/illustration_1.png"),
  require("./assets/images/illustration_2.png"),
  require("./assets/images/illustration_3.png"),
  require("./assets/images/avatar.png"),
];

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  handleResourceAsync = async () => {
    //we're cache all the images
    //fro better performance on the app
    const cacheImages = images.map((img) => {
      return Asset.fromModule(images).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourceAsync}
          onError={(error) => console.warn(error)}
          onFinish={this.setState({ isLoadingComplete: true })}
        />
      );
    }
    return (
      <Block>
        <Navigation />
      </Block>
    );
  }
}
