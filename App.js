import "react-native-gesture-handler";
import LoginScreen from "./src/screens/loginScreen";
import RegisterScreen from "./src/screens/registerScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PathConstant from "./src/navigation/PathConstant";
import HomeScreen from "./src/screens/homeScreen";

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
        <Stack.Screen
          name={PathConstant.HOME}
          component={HomeScreen}
          options={{ title: "Home", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
