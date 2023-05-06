
import React, { useEffect } from 'react'
import { FlexWeb } from '../../components/flexWeb/FlexWeb';
import { FlexMob } from '../../components/flexMob/FlexMob';
export const Task = ({ navigation, route }) => {
  
  useEffect(() => {
    navigation.setOptions({ title:  route.params.title });
  })

  const tasks = {
    flexBox_web: <FlexWeb id={route.params.id} onNav={() => navigation.goBack()} />,
    flexBox_mob: <FlexMob id={route.params.id} onNav={() => navigation.goBack()} />
  }

  return tasks[route.params.name]
}
