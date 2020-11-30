import React from "react";
import { H1, View, Fab, Icon, Toast } from "native-base";
import colors from "../../../../config/colors";

const index = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <H1>Keuangan Hari ini</H1>
      </View>
      <Fab
        onPress={() => {
          Toast.show({ text: "Add comming soon", type: "success" });
        }}
        style={{ backgroundColor: colors.colorBlueNTSC }}
        position="bottomRight"
      >
        <Icon name="add" />
      </Fab>
    </View>
  );
};

export default index;
