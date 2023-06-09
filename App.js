import { View, Text } from 'react-native'
import React from 'react'
import { Navigate } from './src/navigation/Navigate'
import { Provider } from 'react-redux'
import { store } from './src/redux/Store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigate />
      </Provider>
    </>
  )
}

export default App