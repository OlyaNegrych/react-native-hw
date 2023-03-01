import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from "react-native";
// import { StyleSheet, View, Keyboard, ImageBackground, TouchableWithoutFeedback } from "react-native";
// import RegistrationScreen from "./Screens/RegistrationScreen";
// import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("./assets/images/bg_photo.jpg")}>
        <Text>Open up App.js to start!!!</Text>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );

  //   return (
  //     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //       <View style={styles.container}>
  //         <ImageBackground
  //           style={styles.image}
  //           // source={require("./assets/bg_p00000 hoto.jpg")}
  //         >
  //           <RegistrationScreen />
  //           {/* <LoginScreen /> */}
  //         </ImageBackground>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
});


