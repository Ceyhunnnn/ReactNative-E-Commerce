import {
  View,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import Logo from "../../components/logo";
import Button from "../../components/button";
export default function RegisterScreen({ navigation }) {
  const register = () => {};
  const navigateToLogin = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView>
        <View style={styles.content}>
          <View style={styles.logoArea}>
            <Logo />
          </View>
          <View style={styles.inputArea}>
            <TextInput
              placeholderTextColor="gray"
              placeholder="Username"
              style={styles.input}
            />
            <TextInput
              placeholderTextColor="gray"
              placeholder="Surname"
              style={styles.input}
            />
            <TextInput
              placeholderTextColor="gray"
              placeholder="Email Address"
              style={styles.input}
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              style={styles.input}
              secureTextEntry={true}
            />
            <Button title="Register" onPress={register} />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
