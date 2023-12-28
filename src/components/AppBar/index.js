import { View, Text, Image, SafeAreaView } from "react-native";
import { styles } from "./styles";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AppBar() {
  const date = new Date().toLocaleString().split(",")[0];
  return (
    <View style={styles.appBarArea}>
      <View style={styles.appBarUser}>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/avatar.png")}
        />
        <View style={styles.textArea}>
          <Text style={styles.userName} numberOfLines={1}>
            Ceyhun Gul
          </Text>
          <Text style={styles.date} numberOfLines={1}>
            {date}
          </Text>
        </View>
      </View>
      <View>
        <Ionicons name="ios-heart-outline" size={28} color="black" />
      </View>
    </View>
  );
}
