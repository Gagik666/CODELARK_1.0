import { View, FlatList, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategory } from '../../redux/reducers/categoryReducer/CategoryReducer'
import { styles } from './Style'
import { CategoryItem } from '../../components/categoryItem/CategoryItem'
export const Home = ({ navigation }) => {

  const category = useSelector(selectCategory)


  const navTaskList = (name, id) => {
    navigation.navigate("TaskList", {
      id,
      name
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={category}
        renderItem={({ item }) => <CategoryItem  categoryItem={item} item={item.item} navigate={(text) => navTaskList(text, item.id)} />}
      />
    </View>
  )
}
