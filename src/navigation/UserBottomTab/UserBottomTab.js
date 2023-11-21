//react components
import React from 'react';
import {View, Image} from 'react-native';
//custom components
import MyText from 'components/MyText/MyText';
//Bottom Tab
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//global
import {Colors, ScreenNames} from 'global/Index';
//styles
import {styles} from './UserBottomTabStyle';
//screens
import Home from 'screens/UserSection/Home/Home';
import Profile from 'screens/UserSection/Profile/Profile';
import NoScreen from 'screens/UserSection/NoScreen/NoScreen';

const UserBottomTab = ({userToken}) => {
  //variables
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    showLabel: false,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.navigatorStyle,
  };
  // backBehavior = order - return to previous tab (in the order they are shown in the tab bar)
  // backBehavior = history - return to last visited tab
  return (
    <Tab.Navigator backBehavior="history" screenOptions={screenOptions}>
      <Tab.Screen
        name={ScreenNames.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
              <Image source={require('assets/images/home-icon.png')} />
              {/* <MyIcon.Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={focused ? Colors.THEME_GREEN : Colors.LITE_GREY}
                size={24}
              /> */}

              <MyText
                text="Home"
                fontSize={12}
                textColor={focused ? Colors.THEME_VIOLET : Colors.LIGHT_GREY}
                marginHorizontal={5}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.LEAGUES}
        component={NoScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
              <Image source={require('assets/images/leagues-icon.png')} />
              {/* <MyIcon.Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={focused ? Colors.THEME_GREEN : Colors.LITE_GREY}
                size={24}
              /> */}

              <MyText
                text="Leagues"
                fontSize={12}
                textColor={focused ? Colors.THEME_VIOLET : Colors.LIGHT_GREY}
                marginHorizontal={5}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.RESEARCH}
        component={NoScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
              <Image source={require('assets/images/leagues-icon.png')} />
              {/* <MyIcon.Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={focused ? Colors.THEME_GREEN : Colors.LITE_GREY}
                size={24}
              /> */}

              <MyText
                text="Research"
                fontSize={12}
                textColor={focused ? Colors.THEME_VIOLET : Colors.LIGHT_GREY}
                marginHorizontal={5}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.LEADERBORAD}
        component={NoScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
              <Image source={require('assets/images/leagues-icon.png')} />
              {/* <MyIcon.Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={focused ? Colors.THEME_GREEN : Colors.LITE_GREY}
                size={24}
              /> */}

              <MyText
                text="Leaderboar"
                fontSize={12}
                textColor={focused ? Colors.THEME_VIOLET : Colors.LIGHT_GREY}
                marginHorizontal={5}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
              <Image source={require('assets/images/profile-icon.png')} />
              {/* <MyIcon.Ionicons
                name={focused ? 'person' : 'person-outline'}
                color={focused ? Colors.THEME_GREEN : Colors.LITE_GREY}
                size={24}
              /> */}
              <MyText
                text="Profile"
                fontSize={12}
                textColor={focused ? Colors.THEME_VIOLET : Colors.LIGHT_GREY}
                marginHorizontal={5}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserBottomTab;
