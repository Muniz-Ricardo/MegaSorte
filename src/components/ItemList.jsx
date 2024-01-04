import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Item = ({ data }) => {
  return (
    <View style={styles.containerView}>
      <View style={styles.cardLoteria}>
        <Text>{data.loteria}</Text>
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.cardNumbers}>
          <Text style={{ fontWeight: "bold", letterSpacing: 0.6 }}>
            {data.numbers.join(", ")}
          </Text>
          <Image
            source={require("../assets/ic_more_ms.png")}
            style={{ width: 12, height: 12, marginLeft: 10 }}
          />
        </View>
      </View>
      <View style={{ backgroundColor: "#E6E6E6", height: 1, marginTop: 16 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
    marginVertical: 10,
  },
  cardLoteria: {
    width: "54%",
    alignItems: "left",
    justifyContent: "center",
  },
  cardNumbers: {
    width: "100%",
    maxWidth: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

export default Item;
