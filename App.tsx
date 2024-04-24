import { SafeAreaView } from 'react-native'
import React from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { commonStyles } from './src/enums/StyleGuide'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  return (
    <SafeAreaView style={commonStyles.mainContainer}>
      <NavigationContainer>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </NavigationContainer>
      <FlashMessage position={'top'} />
    </SafeAreaView >
  )
}

export default App
