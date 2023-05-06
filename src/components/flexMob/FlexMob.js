import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style';
import { CoinIcone } from '../../assets/icones/CoinIcone';
import { useSelector, useDispatch } from 'react-redux'
import { editFlextTextInput, editFlextTextInputColor, edtCheckVisibleBottomSheet, edtUnCheckVisibleBottomSheet, selectFlexTExtInput, selectFlexTExtInputColor, selectTaskList } from '../../redux/reducers/taskReducer/TaskReducer';
import { Button } from 'react-native-elements';
import { COLOR } from '../../assets/colors/Colors';
import { CheckBottomSheet } from '../../components/checkButtonSheet/CheckButtonSheet';
import { UnCheckBottomSheet } from '../../components/unCheckBottomSheet/UnCheckBottomSheet';
import { deepEqual } from 'fast-equals';

export const FlexMob = ({ id, onNav }) => {
    const taskList = useSelector(selectTaskList)
    const flexText = useSelector(selectFlexTExtInput)
    const textInputColor = useSelector(selectFlexTExtInputColor)
    const [flex, setFlex] = useState({ flexWrap: "wrap"})
    const [coinWidth, setCoinWidth] = useState(taskList[id].coin_width)
    const [flexItem, setFlexItem] = useState({})
    const dispatch = useDispatch()
    const onCheck = () => {
        if (flexText.trim() !== "") {
            if (taskList[id].table_item) {
                setFlexItem(stringToObject(flexText))
                if (deepEqual(taskList[id].table_item, stringToObject(flexText))) {
                    dispatch(edtCheckVisibleBottomSheet(true))
                } else {
                    dispatch(edtUnCheckVisibleBottomSheet(true))
                    dispatch(editFlextTextInputColor(COLOR.red))
                }
            }
            else {
                setFlex(stringToObject(flexText));
                if (deepEqual(taskList[id].table, stringToObject(flexText))) {
                    dispatch(edtCheckVisibleBottomSheet(true))
                    setCoinWidth(50)
                } else {
                    dispatch(edtUnCheckVisibleBottomSheet(true))
                    dispatch(editFlextTextInputColor(COLOR.red))
                }
            }
        }

    }
    const stringToObject = (text) => {
        const arr = text.replace(/;/g, ":").split(":").map(str => str.replace(/\s/g, ""))
        const obj = {};
        for (let i = 0; i < arr.length; i += 2) {
            obj[arr[i]] = arr[i + 1];
        }
        return obj
    }

    return (
        <View style={styles.container}>
            <View style={styles.gameTable}>
                <View style={[taskList[id].table, { position: "absolute", height: "100%", width: "100%" }]}>
                    {
                        taskList[id].items.map((item, index) => {
                            if (index === 2) {
                                return (
                                    <View style={[taskList[id].table_item, { width: 50, height: 50, margin: 16, backgroundColor: item.table_color }]} key={index}></View>
                                )
                            } else {
                                return (
                                    <View style={{ width: 50, height: 50, margin: 16, backgroundColor: item.table_color }} key={index}></View>
                                )
                            }
                        })
                    }
                </View>
                <View style={[flex, { height: "100%", width: "100%" }]} >
                    {
                        taskList[id].items.map((item, index) => {
                            if (index === 2) {
                                return (
                                    <View style={[styles.viewCoin, flexItem, { width: coinWidth }]} key={index}>
                                        <CoinIcone fill={item.coin_color} />
                                    </View>
                                )
                            } else {
                                return (
                                    <View style={[styles.viewCoin, { width: coinWidth }]} key={index}>
                                        <CoinIcone fill={item.coin_color} />
                                    </View>
                                )
                            }
                        })
                    }

                </View>
            </View>
            <View style={styles.viewFooter}>
                <Text style={styles.txtFooter}>{`${taskList[id].flex_class}  {`} </Text>
                <TextInput
                    value={flexText}
                    style={[styles.txtInput, { color: textInputColor }]}
                    multiline={true}
                    onChangeText={(text) => dispatch(editFlextTextInput(text))} />
                <Text style={styles.txtFooter} >{"}"} </Text>
            </View>
            <Button title="Check" containerStyle={{ marginHorizontal: 16, marginBottom: 16 }} onPress={onCheck} />
            <UnCheckBottomSheet />
            <CheckBottomSheet onNav={onNav} />
        </View >
    )
}
