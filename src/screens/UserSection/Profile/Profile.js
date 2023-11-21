//react components
import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
//third parties
//custom components
import MyHeader from 'components/MyHeader/MyHeader';
import MyText from 'components/MyText/MyText';

//global
import {Colors, Constant, Images, ScreenNames, Service} from 'global/Index';
//styles
import {styles} from './ProfileStyle';

const Profile = ({navigation}) => {
  //variables
  //states

  //UI
  return (
    <View style={styles.container}>
      <MyHeader Title="Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <MyText
            text="Today's Games"
            fontSize={16}
            fontFamily="bold"
            textColor={Colors.THEME_BLACK}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Profile;

const IconButton = ({
  text,
  onPress,
  color = Colors.THEME_VIOLET,
  isIcon = false,
  Icon = <Image source={require('assets/images/down-arrow.png')} />,
  style = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iconButtonContainer, style, {backgroundColor: color}]}>
      {isIcon ? Icon : null}
      <MyText
        text={text}
        fontSize={14}
        fontFamily="bold"
        textColor={Colors.WHITE}
        style={{marginLeft: isIcon ? 4 : 0}}
      />
    </TouchableOpacity>
  );
};
