//import : react components
import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Alert,
  Platform,
  Text,
  LogBox,
  Linking,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import : notification
//import : third parties
//import : globals
import {Colors} from 'global/Index';
//import : stack
// import MainStack from '/src/MainStack/MainStack';
import UserBottomTab from './src/navigation/UserBottomTab/UserBottomTab';

const App = () => {

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={Colors.THEME_VIOLET} />
        <UserBottomTab />
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
