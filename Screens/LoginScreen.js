// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";

// export default function LoginScreen() {
//   return (
//     <View style={styles.form}>
//       <View style={styles.userPhoto}></View>
//       <Text style={styles.title}>Увійти</Text>
//       <TextInput
//         style={styles.input}
//         // placeholder={"Адреса електронної пошти"}
//         // placeholderTextColor={"#BDBDBD"}
//       />
//       <TextInput
//         style={{ ...styles.input, marginTop: 16 }}
//         // placeholder={"Пароль"}
//         // placeholderTextColor={"#BDBDBD"}
//         secureTextEntry={true}
//       />

//       <TouchableOpacity style={styles.show}>
//         <Text style={styles.show_text}>Показати!!!</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.register} activeOpacity={0.7}>
//         <Text style={styles.register_text}>Увійти</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.login}>
//         <Text style={styles.login_text}>Немає аккаунта? Зареєструватися</Text>
//       </TouchableOpacity>
//     </View>
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
