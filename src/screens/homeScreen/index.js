import { SafeAreaView, View, Text } from "react-native";
import { styles } from "./styles";
import * as React from "react";
import AppBar from "./../../components/AppBar";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <View style={styles.slider}>
        <Text>Slider Area</Text>
      </View>
    </SafeAreaView>
  );
}
