import React, { useEffect } from "react";
import { BackHandler, StatusBar } from "react-native";
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
          <Iheader />
          <Row size={3}></Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default index;
