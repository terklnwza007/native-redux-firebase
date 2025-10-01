import {View,Text} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SplashScreen} from '../Splash'
import {DrawerNav} from './DrawerNav'

export const StackNav = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="MainDrawer" component={DrawerNav}
      />

    </Stack.Navigator>
  )
}