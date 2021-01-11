import React from "react";
import { Item, Input, Label, DatePicker, Text } from "native-base";
import { View } from "react-native";
import colors from "../../../config/colors";

const ADatePicker = (props) => {
  return (
    <View
      style={{
        borderColor: colors.colorBlackMe,
        paddingBottom: 5,
        paddingHorizontal: 20,
      }}
    >
      <Label style={{ fontWeight: "bold", color: colors.colorBlackMe }}>
        Waktu
      </Label>
      <DatePicker
        {...props}
        defaultDate={props.defaultDate}
        locale={"en"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"slide"}
        androidMode={"default"}
        placeHolderText="Sentuh untuk mengatur tanggal"
        placeHolderTextStyle={{ color: "#d3d3d3" }}
        onDateChange={props.onDateChange}
        disabled={false}
      >
        <Text>Date: {props.chosenDate.toString().substr(4, 12)}</Text>
      </DatePicker>
    </View>
  );
};

export default ADatePicker;
