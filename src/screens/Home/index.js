import React, { useEffect } from "react";
import { BackHandler, StatusBar, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Icon,
  Left,
  View,
} from "native-base";

import colors from "../../config/colors";
import Iheader from "./components/header";
import Icontent from "./components/content";

const index = (props) => {
  return (
    <Container style={{ flex: 1, marginTop: 20 }}>
      <Header style={{ backgroundColor: colors.colorBlueNTSC }}>
        <Left>
          <Icon
            type="MaterialCommunityIcons"
            name="menu"
            style={{ color: "white" }}
          />
        </Left>
        <Body style={{ flex: 2 }}>
          <Title>Home</Title>
        </Body>
      </Header>
      <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.colorBlueNTSC} />
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
