import React, { useEffect } from "react";
import { BackHandler, StatusBar, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Text,
  Grid,
  Row,
} from "native-base";
import colors from "../../config/colors";
import Iheader from "./components/header";
import Icontent from "./components/content";

const index = () => {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  return (
    <Container style={{ flex: 1, marginTop: 20 }}>
      <Header style={{ backgroundColor: colors.colorBlueNTSC }}>
        <Body style={{ alignItems: "center" }}>
          <Title>Home</Title>
        </Body>
      </Header>
      <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
        <Grid>
          <Row style={styles.wrapperOne}>
            <Iheader />
          </Row>
          <Row size={3} style={styles.wrapperTwo}>
            <Icontent />
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapperOne: {
    backgroundColor: colors.colorBlueNTSC,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
    flex: 1,
    flexDirection: "column",
  },
  wrapperTwo: {
    padding: 20,
  },
});
