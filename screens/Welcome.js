import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { theme } from "../constants";
import Block from "./../components/Block";
import Text from "./../components/Text";

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Block>
        <Block center middle flex={0.3}>
          <Text h1 center bold>
            Home.
            <Text h1 primary>
              Greener.
            </Text>
          </Text>
          <Text h3 gray style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the experience
          </Text>
        </Block>

        <Block>
          <Text>Welcome</Text>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
