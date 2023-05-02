import { View, Text } from 'react-native'
import React from 'react'
import { Button, BottomSheet} from '@rneui/themed';
import { useSelector, useDispatch } from 'react-redux';
import { editFlextTextInput, editFlextTextInputColor, edtUnCheckVisibleBottomSheet, selectUnCheckBottomSheet } from '../../redux/reducers/taskReducer/TaskReducer';
import { UncheckIcone } from '../../assets/icones/UncheckIcone';
import { styles } from './Style';
import { COLOR } from '../../assets/colors/Colors';
export const UnCheckBottomSheet = () => {

    const dispatch = useDispatch()
    const isVisible = useSelector(selectUnCheckBottomSheet)


    const onPress = () => {
        dispatch(edtUnCheckVisibleBottomSheet(false))
        dispatch(editFlextTextInputColor(COLOR.black))
        dispatch(editFlextTextInput(""))
    }

    return (
        <View>
            <BottomSheet
                isVisible={isVisible}
            >
                <View style={styles.viewContent}>
                    <View style={styles.viewLine}></View>
                    <View style={styles.viewCheck}>
                        <UncheckIcone />
                    </View>
                    <Text style={styles.txt}>Hmm, think again</Text>
                    <Button title="TRY AGAIN" containerStyle={styles.btn}  buttonStyle={{ backgroundColor: COLOR.buttonBlue, borderRadius: 10 }} onPress={onPress} />
                </View>
            </BottomSheet>
        </View>
    )
}

