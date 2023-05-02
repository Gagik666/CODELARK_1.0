import { StyleSheet } from "react-native";
import { COLOR } from "../../assets/colors/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 16
    },
    category: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    categoryItem: {
        backgroundColor: COLOR.white,
        margin: 16,
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 8,
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
    categoryText: {
        flex: 1,
        color: COLOR.black,
        fontSize: 28,
        marginStart: 16
    },
    itemText: {
        color: COLOR.black,
        fontSize: 20,
        marginStart: 16
    },
    categoryImg: {
        width: 50,
        height: 50,
        resizeMode: "cover"
    },
    itemImg: {
        width: 30,
        height: 30,
        resizeMode: "cover"
    }
})