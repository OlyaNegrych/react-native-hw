// import { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Keyboard,
//   Dimensions,
//   // Platform
// } from "react-native";
// import { AppLoading } from "expo";
// import * as Font from "expo-font";

// const initialState = {
//   login: "",
//   email: "",
//   password: "",
// };

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
//   });
// };

// export default function RegistrationScreen() {
//   const [isShownKeyboard, setIsShownKeyboard] = useState(false);
//   const [state, setState] = useState(initialState);
//   const [isReady, setIsReady] = useState(false);
//   const [dimensions, setDimensions] = useState(
//     (Dimensions.get("window").width = 20 * 2)
//   );

//   useEffect(() => {
//     const onChange = () => {
//       const width = Dimensions.get("window").width - 20 * 2;
//       console.log("width", width);
//       setDimensions(width);
//     };

//     Dimensions.addEventListener("change", onChange);

//     return () => {
//       Dimensions.removeEventListener("change", onChange);
//     };
//   }, []);

//   const keyboardHide = () => {
//     setIsShownKeyboard(false);
//     Keyboard.dismiss();
//     console.log(state);
//     setState(initialState);
//   };

//   if (!isReady) {
//     return (
//       <AppLoading
//         startAsync={loadApplication}
//         onFinish={() => setIsReady(true)}
//         onError={console.warn}
//       />
//     );
//   }

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS == "ios" ? "padding" : "height"}
//     >
//       <View style={styles.form}>
//         {/* <View style={{...styles.form, marginBottom: isShownKeyboard ? 20 : 10, width: dimensions}}></View> */}
//         <View style={styles.userPhoto}></View>
//         <Text style={styles.title}>Реєстрація</Text>
//         <TextInput
//           style={styles.input}
//           // placeholder={"Логін"}
//           // placeholderTextColor={"#BDBDBD"}
//           onFocus={() => setIsShownKeyboard(true)}
//           value={state.login}
//           onChangeText={(value) =>
//             setState((prevState) => ({ ...prevState, login: value }))
//           }
//         />
//         <TextInput
//           style={{ ...styles.input, marginTop: 16 }}
//           // placeholder={"Адреса електронної пошти"}
//           // placeholderTextColor={"#BDBDBD"}
//           onFocus={() => setIsShownKeyboard(true)}
//           value={state.email}
//           onChangeText={(value) =>
//             setState((prevState) => ({ ...prevState, email: value }))
//           }
//         />
//         <TextInput
//           style={{ ...styles.input, marginTop: 16 }}
//           secureTextEntry={true}
//           // placeholder={"Пароль"}
//           // placeholderTextColor={"#BDBDBD"}
//           onFocus={() => setIsShownKeyboard(true)}
//           value={state.password}
//           onChangeText={(value) =>
//             setState((prevState) => ({ ...prevState, password: value }))
//           }
//         />
//         <TouchableOpacity style={styles.show}>
//           <Text style={styles.show_text}>Показати</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.register}
//           activeOpacity={0.7}
//           onPress={keyboardHide}
//         >
//           <Text style={styles.register_text}>Зареєструватися</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.login}>
//           <Text style={styles.login_text}>Вже є аккаунт? Увійти</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   form: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",

//     marginHorizontal: 40,
//     // borderWidth: 1,
//     // borderColor: "black",
//     borderRadius: 5,
//     // borderRadius: 25 25 0 0,
//   },
//   userPhoto: {
//     width: 100,
//     height: 100,
//     backgroundColor: "#F6F6F6",
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 500,
//     // fontFamily: "Roboto-Regular",
//   },
//   input: {
//     width: 250,
//     paddingLeft: 16,
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     height: 40,
//     borderRadius: 8,
//     backgroundColor: "#F6F6F6",
//     color: "#212121",
//   },
//   show: {
//     width: 250,
//     height: 40,
//     backgroundColor: "#F6F6F6",
//   },
//   show_text: {
//     fontSize: 16,
//   },
//   register: {
//     width: 250,
//     height: 40,
//     backgroundColor: "#FF6C00",
//     color: "#fff",
//     borderRadius: 100,
//     justifyContent: "center",
//     alignItems: "center",

//     // backgroundColor: Platform.OS === 'ios' ? "red" : "blue",
//     //-----------------------------------------------------
//     // ...Platform.select({
//     //   ios: {
//     //     backgroundColor: 'red',
//     //   },
//     //   android: {
//     //     backgroundColor: 'blue',
//     //   }
//     // })
//   },
//   register_text: {
//     color: "#fff",
//   },
//   login: {
//     fontSize: 16,
//   },
//   login_text: {
//     fontSize: 16,
//   },
// });