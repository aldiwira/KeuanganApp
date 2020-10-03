import React, { useEffect, useState } from "react";
import * as Expo from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Splash } from "../screens";

import App from "../App";

export default class Setup extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  componentDidMount() {
    this.loadFont();
  }

  async loadFont() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <App />;
  }
}
