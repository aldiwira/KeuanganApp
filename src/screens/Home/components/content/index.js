import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Fab, Icon, Toast, Label, Button } from "native-base";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import colors from "../../../../config/colors";

const index = ({ navigation, route }) => {
  const [isOpenFab, setisOpenFab] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapperContentMain}>
        <Text>Keuangan Hari ini</Text>
      </View>
      <Fab
        active={isOpenFab}
        onPress={() => setisOpenFab(isOpenFab ? false : true)}
        direction="up"
        style={styles.fabStyle}
        position="bottomRight"
      >
        <Icon name="add" />

        <Button
          onPress={() => {
            navigation.navigate("addRecord", { inputType: "Pengeluaran" });
          }}
          style={{ backgroundColor: "#3B5998" }}
        >
          <Icon type="MaterialCommunityIcons" name="upload" />
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("addRecord", { inputType: "Pemasukan" });
          }}
          style={{ backgroundColor: "#34A34F" }}
        >
          <Icon type="MaterialCommunityIcons" name="download" />
        </Button>
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
