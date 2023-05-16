import { View, FlatList, StatusBar, Alert  } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import NetInfo from '@react-native-community/netinfo';
import { selectCategory } from '../../redux/reducers/categoryReducer/CategoryReducer'
import { styles } from './Style'
import { CategoryItem } from '../../components/categoryItem/CategoryItem'
import { COLOR } from '../../assets/colors/Colors'
export const Home = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(true);
  const category = useSelector(selectCategory)


  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const navTaskList = (name, id) => {
    isConnected ?
    navigation.navigate("TaskList", {
      id,
      name
    })
    :
    Alert.alert(
      'There is no internet connection',
      'Please check your internet connection and try again',
      [
        {
          text: 'OK',
          onPress: () =>  {{}}
        }
      ],
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLOR.headerBackgraund} />
      <FlatList
        style={styles.flatList}
        data={category}
        renderItem={({ item }) => <CategoryItem  categoryItem={item} item={item.item} navigate={(text) => navTaskList(text, item.id)} />}
      />
    </View>
  )
}
