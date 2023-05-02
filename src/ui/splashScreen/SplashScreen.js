import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { styles } from './Style'

export const SplashScreen = ({navigation}) => {

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Home")
      }, 500);
    }, [])
    

  return (
    <View style = {styles.container}>
      <Text>SplashScreen</Text>
    </View>
  )
}
