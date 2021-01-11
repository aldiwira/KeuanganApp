import React from "react";
import { Picker } from "native-base";
import colors from "../../../config/colors";
import { View, Text, StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const picker = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.inputTitle}>{props.inputLabel}</Text>
      <Picker
        mode="dialog"
        placeholder="Tipe"
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
        itemStyle
        style={styles.inputTitle}
      >
        {props.pickerItems.map((value) => {
          var key = 1;
          return <Picker.Item label={value} value={value} key={key++} />;
        })}
      </Picker>
    </View>
  );
};

export default picker;

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "transparent",
    margin: 20,
  },
  inputTitle: {
    fontSize: responsiveFontSize(2),
    color: colors.colorBlackMe,
    fontWeight: "bold",
  },
  inputText: {
    fontSize: responsiveFontSize(1.5),
  },
});
