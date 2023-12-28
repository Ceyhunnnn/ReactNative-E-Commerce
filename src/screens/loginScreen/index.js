import {
  View,
  TextInput,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import Logo from "../../components/logo";
import Button from "../../components/button";
import PathConstant from "../../navigation/PathConstant";
export default function LoginScreen({ navigation }) {
  const login = () => {
    navigation.navigate(PathConstant.HOME);
  };
  const navigateToRegister = () => {
    navigation.navigate(PathConstant.REGISTER);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView>
        <View style={styles.photoArea}>
          <Image
            style={styles.photo}
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.logoArea}>
            <Logo />
          </View>
          <View style={styles.inputArea}>
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
            <Button title="Log In" onPress={login} />
          </View>
        </View>
        <View style={styles.account}>
          <Text> Don't have an account ?</Text>
          <Pressable onPress={navigateToRegister}>
            <Text style={styles.register}>Register</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
