import "./onlook-preload-script.js";
import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container} data-oid="4:j:0ap">
        <Text style={styles.h1} data-oid="_qpp9kk">
          Hello CodeSandboxes
        </Text>
        <Text style={styles.h2} data-oid="2rp53fr">
          Start editing to see some magic happen, even on your mobile device!
        </Text>
        <br data-oid="b1c54fw" />
        <br data-oid="yjth3jm" />
        <Text style={styles.paragraph} data-oid="s23lsqt">
          Open Expo on your mobile device with scanning the QR code in the
          application log under the start tab.
        </Text>
      </SafeAreaView>
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
