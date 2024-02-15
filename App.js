<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './screens/Frontend/LogIn';
>>>>>>> 353f576 (Committing local changes before merge)

import LogIn from "./screens/Frontend/LogIn";
const App = () => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <LogIn />
=======
     <LogIn/>
>>>>>>> 353f576 (Committing local changes before merge)
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
