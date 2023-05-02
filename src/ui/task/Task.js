import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './Style';
import { CoinIcone } from '../../assets/icones/CoinIcone';
import { useSelector, useDispatch } from 'react-redux'
import { editFlextTextInput, editFlextTextInputColor, edtCheckVisibleBottomSheet, edtUnCheckVisibleBottomSheet, selectFlexTExtInput, selectFlexTExtInputColor, selectTaskList } from '../../redux/reducers/taskReducer/TaskReducer';
import { Button } from 'react-native-elements';
 
import { COLOR } from '../../assets/colors/Colors';
import { CheckBottomSheet } from '../../components/checkButtonSheet/CheckButtonSheet';
import { UnCheckBottomSheet } from '../../components/unCheckBottomSheet/UnCheckBottomSheet';

export const Task = ({ navigation, route }) => {
  const taskList = useSelector(selectTaskList)
  const flexText = useSelector(selectFlexTExtInput)
  const textInputColor = useSelector(selectFlexTExtInputColor)
  const [flex, setFlex] = useState(null)
 
  useEffect(() => {
    navigation.setOptions({ title: taskList[route.params.id].title });
  })

  const dispatch = useDispatch()

  const onCheck = () => {
    setFlex(stringToObject(cssToNative(flexText)));
    if (JSON.stringify(stringToObject(cssToNative(flexText))) === JSON.stringify(taskList[route.params.id].table)) {
      dispatch(edtCheckVisibleBottomSheet(true))
      
    } else {
      dispatch(edtUnCheckVisibleBottomSheet(true))
      dispatch(editFlextTextInputColor(COLOR.red))
    }

  }

  const stringToObject = (text) => {
    const arr = text.replace(";", ":").split(":").map(str => str.replace(/\s/g, ""))
    const obj = {};
    for (let i = 0; i < arr.length; i += 2) {
      obj[arr[i]] = arr[i + 1];
    }
    return obj
  }

  const cssToNative = (text) => {
    let index = text.indexOf("-")
    let chars = text.split('');
    chars[index + 1] = chars[index + 1].toUpperCase();
    return result = chars.join('').replace("-", "");

  }

  return (
    <View style={styles.container}>
      <View style={styles.gameTahle}>
        <View style={[taskList[route.params.id].table, { position: "absolute", height: "100%", width: "100%", flexDirection: 'row' }]}>
          {
            taskList[route.params.id].items.map((item, index) => (
              <View style={{ width: 50, height: 50, margin: 16, backgroundColor: item.table_color }} key={index}></View>
            ))
          }
        </View>
        <View style={[flex, { height: "100%", width: "100%", flexDirection: "row" }]} >
          {
            taskList[route.params.id].items.map((item, index) => (
              <View style={{ width: 50, height: 50, margin: 16, justifyContent: 'center', alignItems: "center" }} key={index}>
                <CoinIcone fill={item.coin_color} />
              </View>
            ))
          }
        </View>
      </View>
      <View style={styles.viewFooter}>
        <Text style={styles.txtFooter}>{`${taskList[route.params.id].flex_class}  {\n   ${taskList[route.params.id].flex_text}`} </Text>
        <TextInput
          value={flexText}
           style={[styles.txtInput, { color: textInputColor }]} 
           multiline={true}
            onChangeText={(text) => dispatch(editFlextTextInput(text))} />
        <Text style={styles.txtFooter} >{"}"} </Text>
      </View>
      <Button title="Check" containerStyle={{ marginHorizontal: 16, marginBottom: 16 }} onPress={onCheck} />
      <UnCheckBottomSheet />
      <CheckBottomSheet onNav={() => navigation.goBack()}/>
    </View >
  )
}
