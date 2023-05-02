import { StyleSheet } from "react-native";
import { COLOR } from "../../assets/colors/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.backgraund,
         
    },
    flatList: {
        alignSelf: "center",
        width: "90%",
        marginTop: 24
    },
    touchItem: {
        backgroundColor: COLOR.white,
        margin: 8,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    toucText: {
        color: COLOR.black,
        fontSize: 20,
        marginStart: 16
    }
})