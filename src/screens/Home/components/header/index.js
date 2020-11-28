import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Grid, Row, H1, H3, Icon, Text, Toast } from "native-base";
import colors from "../../../../config/colors";
import grtis from "../../../../config/Greatings";
import icons from "react-native-vector-icons";

const Header = () => {
  return (
    <Row style={styles.rowWrapper}>
      <H1 style={styles.textHead}>Keuanganku</H1>
      <H3 style={styles.textGreat}>{grtis()}</H3>
      <Row style={styles.btnWrapper}>
        <Grid
          onTouchStart={() => {
            Toast.show({ text: "Add" });
          }}
          style={styles.btnItemWrap}
        >
          <Icon name="add" />
          <Text>Add</Text>
        </Grid>
        <Grid
          onTouchStart={() => {
            Toast.show({ text: "Sync" });
          }}
          style={styles.btnItemWrap}
        >
          <Icon name="sync" />
          <Text>Refresh</Text>
        </Grid>
      </Row>
    </Row>
  );
};

export default Header;

const styles = StyleSheet.create({
  btnItemWrap: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btnWrapper: {
    backgroundColor: colors.colorWhite,
    marginVertical: 20,
    borderRadius: 20,
    flex: 1,
  },
  rowWrapper: {
    backgroundColor: colors.colorBlueNTSC,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
    flex: 1,
    flexDirection: "column",
  },
  textHead: {
    color: colors.colorWhiteFlat,
    fontWeight: "bold",
  },
  textGreat: {
    color: colors.colorWhiteFlat,
  },
});
