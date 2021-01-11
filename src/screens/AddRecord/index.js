import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Container,
  Content,
  View,
  Text,
  Footer,
  FooterTab,
  Button,
} from "native-base";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import colors from "../../config/colors";
import Apicker from "./components/Picker";
import Ainput from "./components/Input";
import AdatePicker from "./components/DatePicker";
import aText from "./text.json";

const index = (props) => {
  const [selectedValueType, setselectedValueType] = useState(null);
  const [dateValue, setdateValue] = useState(new Date());

  const { navigation, route } = props;
  const envType = route.params.inputType;

  return (
    <Container style={{ flex: 1 }}>
      <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.colorBlueNTSC} style={"light"} />
        <View style={Styles.wrapperView}>
          <HeaderContent
            title={aText[envType].title}
            secTitle={aText[envType].secTitle}
          />
          <Ainput inputLabel="Nominal" keyboardType="numeric" />
          <Apicker
            inputLabel={`Tipe ${aText[envType].title}`}
            pickerItems={aText[envType].type}
            selectedValue={selectedValueType}
            onValueChange={(value) => setselectedValueType(value)}
          />
          <AdatePicker
            defaultDate={dateValue}
            onDateChange={(newDate) => setdateValue(newDate)}
            chosenDate={dateValue}
          />
          <Ainput inputLabel="Keterangan" isTextArea />
        </View>
      </Content>
      <Footer>
        <FooterTab>
          <Button full style={{ backgroundColor: colors.colorBlueNTSC }}>
            <Text style={{ fontSize: 15, color: colors.colorWhiteFlat }}>
              Submit
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default index;

const HeaderContent = (props) => {
  return (
    <View style={Styles.wrapperHeadContent}>
      <Text style={Styles.TitleMain}>{props.title}</Text>
      <Text style={Styles.TitleSec}>{props.secTitle}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  wrapperHeadContent: {
    backgroundColor: colors.colorBlueNTSC,
    padding: 20,
  },
  TitleMain: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    color: colors.colorWhite,
  },
  TitleSec: {
    fontSize: responsiveFontSize(2.5),
    fontStyle: "italic",
    color: colors.colorWhite,
  },
});
