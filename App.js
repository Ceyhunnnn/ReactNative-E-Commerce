import "react-native-gesture-handler";
import LoginScreen from "./src/screens/loginScreen";
import RegisterScreen from "./src/screens/registerScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PathConstant from "./src/navigation/PathConstant";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={PathConstant.LOGIN}
          options={{
            headerShown: false,
            title: "Login",
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name={PathConstant.REGISTER}
          component={RegisterScreen}
          options={{ title: "Register" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
