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
      <MyHeader Title="Home" />
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
              {/* 77 + 46 + 35 + 76 */}
              <View style={styles.infoWhiteTopRow}>
                <View>
                  <MyText
                    text="Prize Pool"
                    fontSize={12}
                    fontFamily="medium"
                    textColor={Colors.LIGHT_GREY}
                    style={{textTransform: 'uppercase', marginBottom: 8}}
                  />
                  <MyText
                    text="$12,000"
                    fontSize={12}
                    fontFamily="bold"
                    textColor={Colors.THEME_BLACK}
                  />
                </View>
                <View>
                  <MyText
                    text="Under"
                    fontSize={12}
                    fontFamily="medium"
                    textColor={Colors.LIGHT_GREY}
                    style={{textTransform: 'uppercase', marginBottom: 8}}
                  />
                  <MyText
                    text="3.25x"
                    fontSize={12}
                    fontFamily="bold"
                    textColor={Colors.THEME_BLACK}
                  />
                </View>
                <View>
                  <MyText
                    text="Over"
                    fontSize={12}
                    fontFamily="medium"
                    textColor={Colors.LIGHT_GREY}
                    style={{textTransform: 'uppercase', marginBottom: 8}}
                  />
                  <MyText
                    text="1.25x"
                    fontSize={12}
                    fontFamily="bold"
                    textColor={Colors.THEME_BLACK}
                  />
                </View>
                <View>
                  <MyText
                    text="Entry Fees"
                    fontSize={12}
                    fontFamily="medium"
                    textColor={Colors.LIGHT_GREY}
                    style={{textTransform: 'uppercase', marginBottom: 8}}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}>
                    <MyText
                      text="5"
                      fontSize={12}
                      fontFamily="bold"
                      textColor={Colors.THEME_BLACK}
                    />
                    <Image
                      source={require('assets/images/yellow-circle.png')}
                      style={{marginLeft: 8}}
                    />
                  </View>
                </View>
              </View>
              <MyText
                text="What's your prediction?"
                fontSize={14}
                fontFamily="bold"
                textColor={Colors.DARY_GREY}
                style={{marginTop: 20, marginBottom: 14}}
              />
              <View style={styles.infoButtonsRow}>
                <IconButton
                  text="Under"
                  color={'#452C55'}
                  isIcon
                  onPress={() => {}}
                  Icon={
                    <Image source={require('assets/images/down-arrow.png')} />
                  }
                  style={{width: '45%'}}
                />
                <IconButton
                  text="Over"
                  isIcon
                  onPress={() => {}}
                  Icon={
                    <Image source={require('assets/images/up-arrow.png')} />
                  }
                  style={{width: '45%'}}
                />
              </View>
            </View>

            <View style={styles.infoVeryLightContainer}>
              <View style={styles.infoVeryLightTopRow}>
                <View style={styles.infoVeryLightTopLeftRow}>
                  <Image source={require('assets/images/player-icon.png')} />
                  <MyText
                    text="355 Players"
                    fontSize={14}
                    fontFamily="bold"
                    textColor={Colors.DARK_GREY}
                    style={{marginLeft: 8}}
                  />
                </View>
                <View style={styles.infoVeryLightTopRightRow}>
                  <Image source={require('assets/images/chart-icon.png')} />
                  <MyText
                    text="View chart"
                    fontSize={14}
                    fontFamily="bold"
                    textColor={Colors.DARK_GREY}
                    style={{marginLeft: 8}}
                  />
                </View>
              </View>
              <View style={styles.infoVeryLightMiddleRow}>
                <View style={styles.infoVeryLightMiddleLeftLine}></View>
                <View style={styles.infoVeryLightMiddleRightLine}></View>
              </View>
              <View style={styles.infoVeryLightBottomRow}>
                <MyText
                  text="232 predicted under"
                  fontSize={12}
                  fontFamily="bold"
                  textColor={Colors.LIGHT_GREY}
                  style={{}}
                />
                <MyText
                  text="123 predicted over"
                  fontSize={12}
                  fontFamily="bold"
                  textColor={Colors.LIGHT_GREY}
                  style={{}}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;

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
