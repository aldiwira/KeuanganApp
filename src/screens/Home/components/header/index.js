import React from "react";
import { StyleSheet } from "react-native";
import { Grid, Row, H1, H3, Icon, Text, Toast, View } from "native-base";
import colors from "../../../../config/colors";
import grtis from "../../../../config/Greatings";

const index = () => {
  return (
    <View style={styles.rowWrapper}>
      <H1 style={styles.textHead}>Keuanganku</H1>
      <H3 style={styles.textGreat}>{grtis()}</H3>
      <Row style={styles.btnWrapper}>
        <Grid style={styles.btnItemWrap}>
          <Text style={{ fontWeight: "bold" }}>Pemasukan</Text>
          <Text style={{ marginTop: 5 }}>Rp.999.999.999</Text>
        </Grid>
        <Grid style={styles.btnItemWrap}>
          <Text style={{ fontWeight: "bold" }}>Pengeluaran</Text>
          <Text style={{ marginTop: 5 }}>Rp.999.999.999</Text>
        </Grid>
        <Grid style={styles.btnItemWrap}>
          <Text style={{ fontWeight: "bold" }}>Sisa</Text>
          <Text style={{ marginTop: 5 }}>Rp.999.999.999</Text>
        </Grid>
      </Row>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  btnItemWrap: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btnWrapper: {
    backgroundColor: colors.colorWhite,
    marginTop: 15,
    borderRadius: 15,
    flex: 1,
  },
  rowWrapper: {
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
