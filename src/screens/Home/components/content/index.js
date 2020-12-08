import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Fab, Icon, Toast } from "native-base";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import colors from "../../../../config/colors";

const index = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapperContentMain}>
        <Text>Keuangan Hari ini</Text>
      </View>
      <Fab
        onPress={() => {
          navigation.navigate("addRecord");
        }}
        style={styles.fabStyle}
        position="bottomRight"
      >
        <Icon name="add" />
      </Fab>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContentMain: {
    flex: 1,
    margin: 10,
  },
  fabStyle: {
    backgroundColor: colors.colorBlueNTSC,
  },
});

export default index;
