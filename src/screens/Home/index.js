import React, { useEffect } from "react";
import { BackHandler, StatusBar, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Grid,
  Row,
  Icon,
  Left,
} from "native-base";
import colors from "../../config/colors";
import Iheader from "./components/header";
import Icontent from "./components/content";

const index = (props) => {
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
        <Grid>
          <Row style={styles.wrapperOne}>
            <Iheader {...props} />
          </Row>
          <Row size={4} style={styles.wrapperTwo}>
            <Icontent {...props} />
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
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
    flexDirection: "column",
  },
  wrapperTwo: {},
});
