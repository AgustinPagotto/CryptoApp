import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";

const RealTimeChart = (props) => {
  return (
      <View style={styles.screen}>
        <Text>HI! This is RealTimeChart</Text>
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

export default RealTimeChart;
