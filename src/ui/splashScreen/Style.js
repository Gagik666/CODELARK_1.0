import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDEAE7"
    },
    img: {
        width: Dimensions.get('window').width * .9,
        height: Dimensions.get('window').width * .9,
        resizeMode: "contain"
      }
})