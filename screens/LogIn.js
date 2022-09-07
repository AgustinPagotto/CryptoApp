import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";

const LogIn = (props) => {
  return (
      <View style={styles.screen}>
        <Text>HI! This is LogIn</Text>
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

export default LogIn;
