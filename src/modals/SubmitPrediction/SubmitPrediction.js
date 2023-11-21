//react components
import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//custom components
import MyButton from 'components/MyButton/MyButton';
import MyText from 'components/MyText/MyText';
//global
import {Colors, ScreenNames, Service} from 'global/Index';
//styles
import {styles} from './SubmitPredictionStyle';

const SubmitPrediction = ({
  visible,
  setVisibility,
  setShowPicker,
  numberChosen,
  setNumberChosen,
  onSubmitPrediction = () => {},
}) => {
  //function : modal function
  const closeModal = () => {
    setVisibility(false);
  };
  //UI
  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      animationType="fade"
      transparent>
      <View style={styles.container}>
        <TouchableOpacity style={styles.blurView} onPress={closeModal} />
        <View style={styles.mainView}>
          <MyText
            text="Your Prediction is Under"
            textColor={Colors.THEME_BLACK}
            fontSize={16}
            fontFamily="bold"
            style={{marginTop: 20}}
          />
          <MyText
            text="Entry Tickets"
            fontSize={12}
            textColor={Colors.DARK_GREY}
            fontFamily="medium"
            style={{textTransform: 'uppercase', marginTop: 28}}
          />
          <IconButton
            text="Select Prediction"
            onPress={() => {
              setShowPicker(true);
            }}
            style={{marginTop: 28}}
          />

          <MyText
            text="You can win"
            fontSize={12}
            textColor={Colors.LIGHT_GREY}
            fontFamily="medium"
            style={{marginTop: 28}}
          />
          <View style={styles.longRow}>
            <MyText
              text="$2000"
              fontSize={14}
              textColor={'#03A67F'}
              fontFamily="medium"
              style={{}}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MyText
                text="Total"
                fontSize={12}
                fontFamily="medium"
                textColor={Colors.DARK_GREY}
                style={{}}
              />
              <Image
                source={require('assets/images/yellow-circle.png')}
                style={{marginLeft: 8}}
              />
              <MyText
                text="5"
                fontSize={12}
                fontFamily="bold"
                textColor={Colors.THEME_BLACK}
                style={{marginLeft: 8}}
              />
            </View>
          </View>
          <IconButton
            text="Submit my Prediction"
            onPress={() => {}}
            style={{marginTop: 28}}
          />
          <View style={{height: 10}} />
        </View>
      </View>
    </Modal>
  );
};
export default SubmitPrediction;

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
