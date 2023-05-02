import { StyleSheet } from "react-native";
import { COLOR } from "../../assets/colors/Colors";

export const styles = StyleSheet.create({
    viewContent: {
        backgroundColor: COLOR.white,
        borderTopRightRadius: 16, borderTopLeftRadius: 16
    },
    viewLine: {
        height: 6,
        width: 40,
        backgroundColor: COLOR.lineTop,
        alignSelf: "center",
        borderRadius: 8,
        marginTop: 10
    },
    viewCheck: {
        backgroundColor: "#FAE7E2",
        alignSelf: "center",
        padding: 8,
        borderRadius: 300,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    txt: {
        color: COLOR.black,
        fontSize: 26,
        alignSelf: "center",
        fontWeight: "bold"
    },
    btn: {
        marginHorizontal: 16,
        marginVertical: 30,
    }
})