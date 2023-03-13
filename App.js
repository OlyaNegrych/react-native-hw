<script src="http://localhost:8097"></script>;
import {
  StyleSheet,
  View,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import RegistrationScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/bg_photo.jpg")}
        >
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
});
