import { View, Text, TextInput, ScrollView} from 'react-native'
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
export const FlexWeb = ({ id, onNav }) => {
    const taskList = useSelector(selectTaskList)
    const flexText = useSelector(selectFlexTExtInput)
    const textInputColor = useSelector(selectFlexTExtInputColor)
    const [flex, setFlex] = useState({ flexDirection: "row" })
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
        let arr = []
        if (taskList[id].table_item) {
            arr = text.replace(/;/g, ":")
            .split(":")
            .map(str => str.replace(/\s/g, ""))
            .filter(item => item !== "")
            .map((el, i) => {
                if (i % 2 === 0) {
                    let index = el.indexOf("-")
                    let chars = el.split('');
                    chars[index + 1] = chars[index + 1].toUpperCase();
                    return chars.join('').replace('-', "");
                }
                return el
            })
        } else {
            if (text.includes('flex-direction')) {
                arr = text.replace(/;/g, ":")
                .split(":")
                .map(str => str.replace(/\s/g, ""))
                .filter(item => item !== "")
                .map((el, i) => {
                    if (i % 2 === 0) {
                        let index = el.indexOf("-")
                        let chars = el.split('');
                        chars[index + 1] = chars[index + 1].toUpperCase();
                        return chars.join('').replace('-', "");
                    }
                    return el
                })
            } else {
                arr = `flex-direction: row ; ${text}`.replace(/;/g, ":")
                .split(":")
                .map(str => str.replace(/\s/g, ""))
                .filter(item => item !== "")
                .map((el, i) => {
                    if (i % 2 === 0) {
                        let index = el.indexOf("-")
                        let chars = el.split('');
                        chars[index + 1] = chars[index + 1].toUpperCase();
                        return chars.join('').replace("-", "");
                    }
                    return el
                })

            }
        }
        console.log(arr);
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
            <ScrollView style={styles.viewFooter}>
                <Text style={styles.txtFooter}>{`${taskList[id].flex_class}  {\n   ${taskList[id].flex_text}`} </Text>
                <TextInput
                    value={flexText}
                    style={[styles.txtInput, { color: textInputColor }]}
                    autoCapitalize="none"
                    autoCorrect={false}
                    multiline={true}
                    onChangeText={(text) => dispatch(editFlextTextInput(text))} />
                <Text style={styles.txtFooter} >{"}"} </Text>
            </ScrollView >
            <Button title="Check" containerStyle={{ marginHorizontal: 16, marginBottom: 16 }} onPress={onCheck} />
            <UnCheckBottomSheet />
            <CheckBottomSheet onNav={onNav} />
        </View >
    )
}
