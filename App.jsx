import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import UseRefToutorial from './SRC/UseRefHook/useRefToutorial'
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>Hello World 👋</Text>
      <Text style={styles.subtitle}>
        Welcome to your first React Native App
      </Text>
      <UseRefToutorial/> 
      
    </View>
  );
  
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e3c72",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#cfd9ff",
  },
});
