import { View, Text } from 'react-native'
import React from 'react'
import { Button, BottomSheet } from '@rneui/themed';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './Style';
import { COLOR } from '../../assets/colors/Colors';
import { editFlextTextInput, edtCheckVisibleBottomSheet, selectCheckBottomSheet } from '../../redux/reducers/taskReducer/TaskReducer';
import { CheckIcone } from '../../assets/icones/CheckIcone';

export const CheckBottomSheet = ({onNav}) => {

    const dispatch = useDispatch()
    const isVisible = useSelector(selectCheckBottomSheet)

    const onPress = () => {
        dispatch(edtCheckVisibleBottomSheet(false))
        dispatch(editFlextTextInput(""))
        onNav()
    }

    return (
        <View>
            <BottomSheet
                isVisible={isVisible}
            >
                <View style={styles.viewContent}>
                    <View style={styles.viewLine}></View>
                    <View style={styles.viewCheck}>
                        <CheckIcone />
                    </View>
                    <Text style={styles.txt}>Good job!</Text>
                    <Button title="Continue" containerStyle={styles.btn} buttonStyle={{ backgroundColor: COLOR.buttonGreen, borderRadius: 10 }} onPress={onPress} />
                </View>
            </BottomSheet>
        </View>
    )
}

