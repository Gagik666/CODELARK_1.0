import { View, Image, StatusBar } from 'react-native'
import React, {useEffect} from 'react'
import { styles } from './Style'

export const SplashScreen = ({navigation}) => {

    useEffect(() => {
      setTimeout(() => {
        navigation.replace("Home")
      }, 1000);
    }, [])
    

  return (
    <View style = {styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EDEAE7" />
      <Image
          source={require('../../assets/images/CODELARK.png')}
          style={styles.img}
        />
    </View>
  )
}
