import { StyleSheet } from "react-native";
import { COLOR } from "../../assets/colors/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gameTahle: {
        backgroundColor: COLOR.taskBackgraund,
        width: "100%",
        height: "50%",
    },
    viewFooter: {
        padding: 16,
        backgroundColor: COLOR.backgraund,
        height: "42%"
    },
    txtFooter: {
        color: COLOR.black,
        fontSize: 18,
        marginVertical: 4,
    },
    txtInput: {
        backgroundColor: COLOR.white,
        width: "80%",
        marginStart: 20,
        fontSize: 18,
        color: COLOR.black,
    }
})