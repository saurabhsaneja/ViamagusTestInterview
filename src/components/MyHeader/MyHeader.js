//import : react components
import React, {useCallback} from 'react';
import {View, TouchableOpacity, Image, Keyboard} from 'react-native';
import {
  DrawerActions,
  useNavigation,
  useFocusEffect,
  CommonActions,
} from '@react-navigation/native';
//import : custom components
import MyText from 'components/MyText/MyText';
//import : global
import {Colors, Images, ScreenNames, Service} from 'global/Index';
//import : styles
import {styles} from './MyHeaderStyle';
//redux
const MyHeader = ({
  Title,
  hasDrawerButton = false,
  isBorderRadius = true,
  IsCartIcon = true,
  IsNotificationIcon = true,
  hideAddMore = true,
  backAction = () => {},
  isCustomBackAction = false,
}) => {
  //variables
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  //function : navigation function
  const goBack = () => {
    Keyboard.dismiss();
    if (isCustomBackAction) {
      backAction();
    } else {
      navigation.canGoBack()
        ? navigation.goBack()
        : console.log("can't go back");
    }
  };
  //UI
  return (
    <View
      style={{
        ...styles.container,
        borderBottomLeftRadius: isBorderRadius ? 30 : 0,
        borderBottomRightRadius: isBorderRadius ? 30 : 0,
      }}>
      {/* section first drawer and back icon  */}
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          source={Images.NavIcon}
          style={{
            height: 24,
            width: 24,
          }}
        />
      </TouchableOpacity>
      {/* title section  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: true ? 40 : 0,
        }}>
        <MyText
          text={Title}
          fontFamily="black"
          fontSize={16}
          marginHorizontal={10}
          textColor="white"
        />
      </View>
      {/* notification or cart icon  */}
      {true ? (
        <TouchableOpacity style={{marginRight: 20}} onPress={() => {}}>
          {2 > 0 ? (
            <View
              style={{
                position: 'absolute',
                top: -10,
                right: -5,
                height: 15,
                width: 15,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.RED,
                borderRadius: 100,
              }}>
              <MyText text={2} fontSize={10} textColor="white" />
            </View>
          ) : null}
          {/* <MyIcon.Feather name="bell" size={24} color={Colors.WHITE} /> */}
        </TouchableOpacity>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {true ? (
            <TouchableOpacity onPress={() => {}} style={{marginRight: 20}}>
              {2 > 0 ? (
                <View
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: -5,
                    height: 15,
                    width: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: Colors.RED,
                    borderRadius: 100,
                  }}>
                  <MyText text={2} fontSize={10} textColor="white" />
                </View>
              ) : null}
              {/* <MyIcon.Feather name="bell" size={24} color={Colors.WHITE} /> */}
            </TouchableOpacity>
          ) : null}
          {true ? (
            <TouchableOpacity onPress={() => {}}>
              {true > 0 ? (
                <View
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: -5,
                    height: 15,
                    width: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: Colors.RED,
                    borderRadius: 100,
                  }}>
                  <MyText text={1} fontSize={10} textColor="white" />
                </View>
              ) : null}
              {/* <MyIcon.Feather
                name="shopping-cart"
                size={24}
                color={Colors.WHITE}
              /> */}
            </TouchableOpacity>
          ) : null}
        </View>
      )}
    </View>
  );
};

export default MyHeader;
