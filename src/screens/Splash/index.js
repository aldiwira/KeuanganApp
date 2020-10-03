import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container, Content, Text, Footer } from "native-base";
import Colors from "../../config/colors";

const index = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
  }, []);
  return (
    <Container>
      <Content contentContainerStyle={styles.Container}>
        <StatusBar style={"light"} />
        <Text style={styles.Text}>Keuanganku</Text>
      </Content>
      <Footer style={{ backgroundColor: Colors.colorBlueNTSC }}>
        <Text style={styles.Text2}>Version 1.0.0</Text>
      </Footer>
    </Container>
  );
};

export default index;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.colorBlueNTSC,
  },
  Text: {
    color: Colors.colorWhiteFlat,
    fontSize: 40,
  },
  Text2: {
    color: Colors.colorWhiteFlat,
    fontSize: 15,
    fontStyle: "italic",
  },
});
