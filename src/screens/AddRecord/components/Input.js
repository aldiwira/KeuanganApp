import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
import { Textarea } from "native-base";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import colors from "../../../config/colors";

const AInput = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.inputTitle}>{props.inputLabel}</Text>
      {props.isTextArea ? (
        <Textarea
          style={
            (styles.inputText, { marginVertical: 10, paddingVertical: 10 })
          }
          rowSpan="5"
          bordered
        />
      ) : (
        <TextInput style={styles.inputText} keyboardType={props.keyboardType} />
      )}
    </View>
  );
};

export default AInput;

const styles = StyleSheet.create({
  wrapper: {
    margin: 20,
  },
  inputTitle: {
    fontSize: responsiveFontSize(2),
    color: colors.colorBlackMe,
    fontWeight: "bold",
  },
  inputText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    fontSize: responsiveFontSize(2),
  },
});
