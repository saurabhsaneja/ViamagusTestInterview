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
  const [tabs, setTabs] = useState([
    {id: '1', name: 'Games Played'},
    {id: '2', name: 'Badges'},
  ]);
  const [selectedTab, setSelectedTab] = useState('1');
  //variables
  //states

  //UI
  return (
    <View style={styles.container}>
      <MyHeader Title="Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <Image source={require('assets/images/profile-image.png')} />
          <MyText
            text="Jinna Simons"
            fontSize={14}
            fontFamily="medium"
            textColor={Colors.THEME_BLACK}
            style={{marginTop: 12}}
          />
          <MyText
            text="6000 PTS"
            fontSize={12}
            fontFamily="medium"
            textColor={Colors.DARK_GREY}
            style={{marginTop: 8}}
          />
          <MyText
            text="I'm a software developer that has been in the crypto space since 2012. And I've seen it grow and falter over a period of time. Really happy to be here!"
            fontSize={14}
            fontFamily="medium"
            textColor={Colors.DARK_GREY}
            lineHeight={20}
            style={{marginTop: 8}}
          />
          <View style={styles.logoutContainer}>
            <Image source={require('assets/images/logout-icon.png')} />
            <MyText
              text="Logout"
              fontSize={13}
              fontFamily="medium"
              textColor={Colors.DARK_GREY}
              style={{marginLeft: 8}}
            />
          </View>
        </View>
        <View style={styles.underOverContainer}>
          <View>
            <MyText
              text="Under or Over"
              fontSize={14}
              fontFamily="medium"
              textColor={Colors.DARK_GREY}
              style={{marginBottom: 14}}
            />
            <View style={styles.changePercentRow}>
              <Image source={require('assets/images/up-green-arrow.png')} />
              <MyText
                text="81%"
                fontSize={24}
                fontFamily="bold"
                textColor={'#4F4F4F'}
                style={{marginLeft: 12}}
              />
            </View>
          </View>
          <View style={{marginLeft: 57}} >
            <MyText
              text="Top 5"
              fontSize={14}
              fontFamily="medium"
              textColor={Colors.DARK_GREY}
              style={{marginBottom: 14}}
            />
            <View style={styles.changePercentRow}>
              <Image source={require('assets/images/down-red-arrow.png')} />
              <MyText
                text="51%"
                fontSize={24}
                fontFamily="bold"
                textColor={'#4F4F4F'}
                style={{marginLeft: 12}}
              />
            </View>
          </View>
          <Image
            source={require('assets/images/overtop-icon.png')}
            style={{position: 'absolute', top: -31 / 2, right: '50%'}}
          />
        </View>
        {/* seperator */}
        <View style={styles.seperator}></View>
        {/* tabs view */}
        <View style={styles.tabsContainer}>
          {tabs?.map(el => (
            <TouchableOpacity
              onPress={() => {
                if (el?.id === selectedTab) {
                  return;
                }
                setSelectedTab(el?.id);
              }}
              style={[
                styles.tabView,
                el?.id === selectedTab ? styles.selectedTabView : null,
              ]}>
              <MyText
                text={el?.name}
                fontSize={14}
                fontFamily="bold"
                textColor={
                  el?.id === selectedTab
                    ? Colors.THEME_VIOLET
                    : Colors.LIGHT_GREY
                }
              />
            </TouchableOpacity>
          ))}
        </View>
        {selectedTab === '1' ? (
          <View style={styles.badgesContainer}>
            {gamesPlayedData?.length > 0 ? (
              <FlatList
                data={gamesPlayedData}
                renderItem={({item, index}) => {
                  return <Badge title={item?.title} desc={item?.desc} />;
                }}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <MyText
                text="No Games Played to show"
                fontSize={16}
                fontFamily="bold"
                textColor={Colors.THEME_BLACK}
                style={{}}
              />
            )}
          </View>
        ) : (
          <View style={styles.badgesContainer}>
            {badgesData?.length > 0 ? (
              <FlatList
                data={badgesData}
                renderItem={({item, index}) => {
                  return <Badge title={item?.title} desc={item?.desc} />;
                }}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <MyText
                text="No Badges to show"
                fontSize={16}
                fontFamily="bold"
                textColor={Colors.THEME_BLACK}
              />
            )}
          </View>
        )}
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
const gamesPlayedData = [];

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
