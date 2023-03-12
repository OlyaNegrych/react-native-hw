import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import addPhotoIcon from "../assets/images/union.png";
import deletePhotoIcon from "../assets/images/greyUnion.png";
import userPhoto from "../assets/images/userPhoto.png";

SplashScreen.preventAutoHideAsync();

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [credentials, setCredentials] = useState(initialState);
  const [isPhoto, setIsPhoto] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
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

  const handleRegister = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    console.log(credentials);
    setCredentials(initialState);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View
        style={{ ...styles.form, marginBottom: isShownKeyboard ? 20 : 50 }}
        onLayout={onLayoutRootView}
      >
        <View style={styles.userPhoto}>
          {isPhoto && (
            <Image source={userPhoto} />
          )}
          {isPhoto ? (
            <TouchableOpacity
              style={{ ...styles.addPhotoBtn, borderColor: "#BDBDBD" }}
              activeOpacity={0.7}
              onPress={() => setIsPhoto(false)}
            >
              <Image source={deletePhotoIcon} style={styles.addPhotoImg} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.addPhotoBtn}
              activeOpacity={0.7}
              onPress={() => setIsPhoto(true)}
            >
              <Image source={addPhotoIcon} style={styles.addPhotoImg} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder={"Ім'я"}
            placeholderTextColor={"#BDBDBD"}
            onFocus={() => setIsShownKeyboard(true)}
            value={credentials.name}
            onChangeText={(value) =>
              setCredentials((prevState) => ({ ...prevState, name: value }))
            }
          />
        </View>

        <View>
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
        </View>

        <View style={{ position: "relative" }}>
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
          <TouchableOpacity
            style={styles.show}
            activeOpacity={0.7}
            onPressIn={() => setShowPassword(false)}
            onPressOut={() => setShowPassword(true)}
          >
            <Text style={styles.show_text}>Показати</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.register_btn}
          activeOpacity={0.7}
          onPress={handleRegister}
        >
          <Text style={styles.register_text}>Зареєструватися</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.login_text}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: 15,
    paddingTop: 70,
    position: "relative",
  },
  userPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    left: "50%",
    transform: [{ translateY: -130 }, { translateX: -60 }],
  },
  addPhotoBtn: {
    position: "absolute",
    right: 0,
    bottom: 14,
    width: 25,
    height: 25,
    transform: [{ translateX: 12.5 }],

    alignItems: "center",
    justifyContent: "center",

    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: "50%",
  },
  addPhotoImg: {
    resizeMode: "cover",
    width: 15,
    height: 15,
  },
  title: {
    alignSelf: "center",
    fontFamily: "Roboto-Bold",
    color: "#212121",
    textAlign: "center",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: "0.01em",
    marginBottom: 33,
    marginBottom: 34,
  },
  input: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",

    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  show: {
    position: "absolute",
    top: 30,
    right: 16,
  },
  show_text: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  register_btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingHorizontal: 93,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 16,
  },
  register_text: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
  login_text: {
    fontWeight: 400,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    textAlign: "center",
    marginBottom: 60,
    color: "#1B4371",
  },
});
