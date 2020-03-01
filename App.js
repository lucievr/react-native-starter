import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [headingText, setHeadingText] = useState(
    "Welcome to my first React Native app ⚛"
  );
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{headingText}</Text>
      <TextInput
        value={inputValue}
        placeholder="Type in your name"
        style={styles.inputBox}
        onChangeText={(text) => setInputValue(text)}
      />
      <Button 
        title="Submit"
        style={styles.button}
        onPress={() => setHeadingText("Thank you!")} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffdd76",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 26,
    padding: 10,
    textAlign: "center",
  },
  inputBox: {
    height: 30,
    fontSize: 18,
    margin: 30,
  },
  button: {
    padding: 20,
    margin: 30,
  }
});
