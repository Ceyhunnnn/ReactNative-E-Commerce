import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";
import Button from "./../../../../components/button";

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.formArea}>
          <TextInput
            placeholderTextColor="gray"
            placeholder="Name"
            defaultValue="Ceyhun"
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="gray"
            placeholder="Surname"
            defaultValue="GUL"
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="gray"
            placeholder="Email Address"
            style={styles.input}
            keyboardType="email-address"
            defaultValue="test@gmail.com"
          />
          <TextInput
            defaultValue="asddas"
            placeholder="Password"
            placeholderTextColor="gray"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <Button title="Update" />
      </View>
    </View>
  );
}
