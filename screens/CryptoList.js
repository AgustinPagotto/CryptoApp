import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";

const CryptoList = (props) => {
  return (
      <View style={styles.screen}>
        <Text>HI! This is CryptoList</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CryptoList;
