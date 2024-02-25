
import React from "react";
// =======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './screens/Frontend/LogIn';
import Home from "./screens/Frontend/Home";

const App = () => {
  return (
    // <View style={styles.container}>

    //  {/* <LogIn/> */}
      
    // </View>
    <Home/>
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
