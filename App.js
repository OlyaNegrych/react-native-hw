import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        {/* <MainStack.Screen name="Home" component={Home} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
