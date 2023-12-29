import { View, Text } from "react-native";
import React from "react";

export default function Title({ title }) {
  return (
    <Text style={{ fontWeight: "600", marginTop: 30, fontSize: 17 }}>
      {title}
    </Text>
  );
}
