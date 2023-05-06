import { StyleSheet } from "react-native";
import { COLOR } from "../../assets/colors/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gameTable: {
        backgroundColor: COLOR.taskBackgraund,
        width: "100%",
        height: "55%",
    },
    viewFooter: {
        padding: 16,
        backgroundColor: COLOR.backgraund,
        height: "37%"
    },
    txtFooter: {
        color: COLOR.black,
        fontSize: 18,

    },
    txtInput: {
        backgroundColor: COLOR.white,
        width: "80%",
        marginStart: 10,
        fontSize: 18,
        color: COLOR.black,
    },
    viewCoin: {
        
        height: 50,
        margin: 16,
        justifyContent: 'center',
        alignItems: "center"
    }
})