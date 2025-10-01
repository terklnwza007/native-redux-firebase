import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNav } from './screens/navigators/DrawerNav'

import { Provider } from 'react-redux'
import store from './redux/store'

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNav />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});