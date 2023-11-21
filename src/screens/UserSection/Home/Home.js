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
import {styles} from './HomeStyle';

const Home = ({navigation}) => {
  //variables
  //states

  //UI
  return (
    <View style={styles.container}>
      <MyHeader
        Title="Home"
        hasDrawerButton={true}
        isBorderRadius={false}
        hideAddMore={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <MyText
            text="Today's Games"
            fontSize={16}
            fontFamily="bold"
            textColor={Colors.THEME_BLACK}
          />
          <View style={{width: '100%', marginTop: 17}}>
            <View style={styles.infoVioletContainer}>
              <View style={styles.infoVioletTopRow}>
                <View style={styles.infoVioletTopLeftRow}>
                  <MyText
                    text="Under or Over"
                    fontSize={12}
                    fontFamily="bold"
                    textColor={Colors.LIGHT_VIOLET}
                    style={{textTransform: 'uppercase'}}
                  />
                  <Image
                    source={require('assets/images/info-icon.png')}
                    style={{marginLeft: 8}}
                  />
                </View>
                <View style={styles.infoVioletTopRightRow}>
                  <MyText
                    text="Starting in"
                    fontSize={12}
                    fontFamily="medium"
                    textColor={Colors.LIGHT_VIOLET}
                    style={{}}
                  />
                  <Image
                    source={require('assets/images/clock-icon.png')}
                    style={{marginLeft: 8}}
                  />
                  <MyText
                    text="03:23:12"
                    fontSize={14}
                    fontFamily="medium"
                    textColor={Colors.LIGHT_VIOLET}
                    style={{marginLeft: 8}}
                  />
                </View>
              </View>
              <View style={styles.infoVioletBottomRow}>
                <MyText
                  text="Bitcoin price will be under"
                  fontSize={14}
                  fontFamily="medium"
                  textColor={Colors.LIGHT_VIOLET}
                  style={{}}
                />
                <View style={styles.infoVioletPriceRow}>
                  <MyText
                    text="$24,524"
                    fontSize={14}
                    fontFamily="bold"
                    textColor={Colors.WHITE}
                    lineHeight={19}
                    style={{}}
                  />
                  <MyText
                    text=" at 7 a ET on 22nd Jan'21"
                    fontSize={14}
                    fontFamily="medium"
                    textColor={Colors.WHITE}
                    lineHeight={19}
                    style={{}}
                  />
                </View>
              </View>
            </View>
            <View style={styles.infoWhiteContainer}>
              
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
