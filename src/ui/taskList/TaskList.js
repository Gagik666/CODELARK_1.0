import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './Style'
import { db, onValue, ref } from '../../firebase/Index'
import { useSelector, useDispatch } from 'react-redux'
import { editList, selectItemTasksTitle } from '../../redux/reducers/taskReducer/TaskReducer'

import { ArrowRightIcone } from '../../assets/icones/ArrowRightIcone'

export const TaskList = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const taskTitle = useSelector(selectItemTasksTitle)
  
  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [])


  const getCurrentTask = (name) => {
    const starCountRef = ref(db, `${name}/`);
    onValue(starCountRef, (r) => {
      const data = r.val();
      const items = Object.values(data);
      dispatch(editList(items))
    });
  }

  const onNav = (title, name) => {
    getCurrentTask(name)
    navigation.navigate("TaskItems", {
      title,
    })
  }


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={taskTitle[route.params.id].tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.touchItem} onPress={() => onNav(item.title, item.name)}>
            <Text style={styles.toucText}>{item.title}</Text>
            <ArrowRightIcone />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
