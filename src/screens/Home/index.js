import React, { useEffect, useLayoutEffect } from "react";
import { BackHandler, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Container, Content, Icon, View } from "native-base";

import colors from "../../config/colors";
import Iheader from "./components/header";
import Icontent from "./components/content";

const index = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <Icon
          type="MaterialCommunityIcons"
          name="menu"
          style={{ color: "white", marginLeft: 20 }}
        />
      ),
    });
  });

  return (
    <Container style={{ flex: 1 }}>
      <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.colorBlueNTSC} style="inverted" />
        <View style={styles.wrapperMain}>
          <View style={styles.wrapperHeader}>
            <Iheader {...props} />
          </View>
          <View style={styles.wrapperContent}>
            <Icontent {...props} />
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapperMain: {
    flex: 1,
  },
  wrapperHeader: {
    flex: 1,
    flexDirection: "column",
  },
  wrapperContent: {
    flex: 3,
  },
});
