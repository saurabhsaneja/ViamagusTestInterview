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
        <View style={styles.badgesContainer}>
          {badgesData?.map(el => (
            <Badge title={el?.title} desc={el?.desc} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Profile;

const badgesData = [
  {
    id: '1',
    title: 'First Stripe Earned',
    desc: 'Top 10% of highest spending players in a month',
  },
  {
    id: '2',
    title: 'First Stripe Earned',
    desc: 'Top 10% of highest spending players in a month',
  },
];

const Badge = ({title, desc}) => {
  return (
    <View style={styles.badgeBox}>
      <Image source={require('assets/images/badge-icon.png')} />
      <View style={styles.badgeRightBox}>
        <MyText
          text={title}
          fontSize={14}
          fontFamily="bold"
          textColor={Colors.THEME_BLACK}
          style={{marginBottom: 8}}
        />
        <MyText
          text={desc}
          fontSize={14}
          fontFamily="medium"
          textColor={Colors.DARK_GREY}
          lineHeight={20}
        />
      </View>
    </View>
  );
};
