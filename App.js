import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider dataSet={{ oid: "zi-ombl" }}>
        <SafeAreaView style={styles.container} dataSet={{ oid: "4:j:0ap" }}>
          <Text style={styles.h1} dataSet={{ oid: "_qpp9kk" }}>
            Hello CodeSandbox
          </Text>
          <Text style={styles.h2} dataSet={{ oid: "2rp53fr" }}>
            Start editing to see some magic happen, even on your mobile device!
          </Text>
          <View style={{ height: 16 }} dataSet={{ oid: "ghh0b9." }} />
          <View style={{ height: 16 }} dataSet={{ oid: "qjq-ng8" }} />
          <Text style={styles.paragraph} dataSet={{ oid: "s23lsqt" }}>
            Open Expo on your mobile device with scanning the QR code in the
            application log under the start tab.
          </Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 8,
    fontSize: 16,
    textAlign: "center",
  },
  h1: {
    margin: 28,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    margin: 16,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});
