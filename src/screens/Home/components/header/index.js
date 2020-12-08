import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import colors from "../../../../config/colors";
import grtis from "../../../../config/Greatings";

const index = () => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.textHead}>Keuanganku</Text>
        <Text style={styles.textGreat}>{grtis()}</Text>
      </View>
      <View style={styles.navWrapper}>
        <View style={styles.btnItemWrap}>
          <Text style={styles.textNavMain}>Pemasukan</Text>
          <Text style={styles.textNavSec}>Rp.999.999.999</Text>
        </View>
        <View style={styles.btnItemWrap}>
          <Text style={styles.textNavMain}>Pengeluaran</Text>
          <Text style={styles.textNavSec}>Rp.999.999.999</Text>
        </View>
        <View style={styles.btnItemWrap}>
          <Text style={styles.textNavMain}>Sisa</Text>
          <Text style={styles.textNavSec}>Rp.999.999.999</Text>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: colors.colorBlueNTSC,
    padding: 15,
    borderBottomEndRadius: 20,
  },
  navWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.colorWhite,
    marginVertical: 10,
    borderRadius: 10,
  },
  titleWrapper: {},
  btnItemWrap: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textHead: {
    color: colors.colorWhiteFlat,
    fontWeight: "bold",
    fontSize: responsiveFontSize(3.5),
  },
  textGreat: {
    color: colors.colorWhiteFlat,
    fontSize: responsiveFontSize(3),
  },
  textNavMain: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(2),
  },
  textNavSec: {
    marginTop: 5,
    fontSize: responsiveFontSize(2),
  },
});
