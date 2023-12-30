import "react-native-gesture-handler";
import LoginScreen from "./src/screens/loginScreen";
import RegisterScreen from "./src/screens/registerScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PathConstant from "./src/navigation/PathConstant";
import HomeScreen from "./src/screens/homeScreen";
import ProfileScreen from "./src/screens/profileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import EditProfile from "./src/screens/profileScreen/screens/editProfile";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const HomeLayout = () => (
    <Tab.Navigator>
      <Tab.Screen
        name={PathConstant.HOME}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={PathConstant.PROFILE}
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
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
          name={PathConstant.HOME_LAYOUT}
          component={HomeLayout}
          options={{
            title: "HomeLayout",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={PathConstant.EDIT_PROFILE}
          component={EditProfile}
          options={{
            title: "Edit Profile",
            headerBackTitle: "Profile",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
