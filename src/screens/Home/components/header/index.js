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
        <Text style={styles.textHead}>{grtis()}</Text>
        <Text style={styles.textGreat}>Pengeluaran bulan ini</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            ...styles.navWrapper,
          }}
        >
          <View style={styles.btnItemWrap}>
            <Text style={styles.textNavMain}>Pemasukan</Text>
            <Text style={styles.textNavSec}>Rp.1.000.000</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.navWrapper,
          }}
        >
          <View style={styles.btnItemWrap}>
            <Text style={styles.textNavMain}>Pengeluaran</Text>
            <Text style={styles.textNavSec}>Rp.1.000.000</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.navWrapper,
          }}
        >
          <View style={styles.btnItemWrap}>
            <Text style={styles.textNavMain}>Sisa</Text>
            <Text style={styles.textNavSec}>Rp.1.000.000</Text>
          </View>
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
    borderBottomEndRadius: 20,
    padding: 5,
  },
  navWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.colorWhiteFlat,
    marginHorizontal: 5,
    marginVertical: 15,
    borderRadius: 10,
  },
  titleWrapper: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
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
  textGreat2: {
    color: colors.colorWhiteFlat,
    marginTop: 5,
    fontStyle: "italic",
    fontSize: responsiveFontSize(2),
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
