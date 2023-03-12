import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";

SplashScreen.preventAutoHideAsync();

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [credentials, setCredentials] = useState(initialState);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setCredentials(initialState);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View
        style={{ ...styles.form, marginBottom: isShownKeyboard ? 20 : 10 }}
        onLayout={onLayoutRootView}
      >
        <Text style={styles.title}>Увійти</Text>

        <TextInput
          style={{ ...styles.input, marginTop: 16 }}
          placeholder={"Адреса електронної пошти"}
          placeholderTextColor={"#BDBDBD"}
          onFocus={() => setIsShownKeyboard(true)}
          value={credentials.email}
          onChangeText={(value) =>
            setCredentials((prevState) => ({ ...prevState, email: value }))
          }
        />
        <TextInput
          style={{ ...styles.input, marginTop: 16 }}
          secureTextEntry={true}
          placeholder={"Пароль"}
          placeholderTextColor={"#BDBDBD"}
          onFocus={() => setIsShownKeyboard(true)}
          value={credentials.password}
          onChangeText={(value) =>
            setCredentials((prevState) => ({ ...prevState, password: value }))
          }
        />
        <TouchableOpacity style={styles.show}>
          <Text style={styles.show_text}>Показати</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.register}
          activeOpacity={0.7}
          onPress={keyboardHide}
        >
          <Text style={styles.register_text}>Увійти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.login_text}>Немає акаунту? Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginHorizontal: 20,
    // width: 320,
    padding: 20,
    // borderWidth: 1,
    // borderColor: "black",
    borderRadius: 5,
    // borderRadius: 50,
  },
  userPhoto: {
    width: 100,
    height: 100,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    alignSelf: "center",
    fontFamily: "Roboto-Bold",
  },
  input: {
    // width: 250,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 40,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    color: "#212121",
  },
  show: {
    width: 250,
    height: 40,
    backgroundColor: "#F6F6F6",
  },
  show_text: {
    fontSize: 16,
  },
  register: {
    width: 250,
    height: 40,
    backgroundColor: "#FF6C00",
    color: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: Platform.OS === 'ios' ? "red" : "blue",
    //-----------------------------------------------------
    // ...Platform.select({
    //   ios: {
    //     backgroundColor: 'red',
    //   },
    //   android: {
    //     backgroundColor: 'blue',
    //   }
    // })
  },
  register_text: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
  },
  login: {
    fontSize: 16,
  },
  login_text: {
    fontSize: 16,
    alignSelf: "center",
  },
});
