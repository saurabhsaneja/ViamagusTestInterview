//react components
import React from 'react';
import {TouchableOpacity} from 'react-native';
//custom components
import MyText from 'components/MyText/MyText';
//globals
import {Colors} from 'global/Index';

const MyButton = ({
  Title,
  fontSize = 16,
  height = 40,
  borderColor,
  width,
  alignSelf,
  onPress = () => {},
  backgroundColor = Colors.THEME_GREEN,
}) => {
  //UI
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: borderColor ? 'transparent' : backgroundColor,
        borderWidth: borderColor ? 1 : 0,
        borderColor: borderColor,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: alignSelf,
        flexDirection: 'row',
        height: height,
        borderRadius: 5,
        width: width,
        marginVertical: 10,
      }}>
      <MyText
        text={Title}
        textColor={borderColor ? borderColor : 'white'}
        fontSize={fontSize}
        fontFamily="medium"
      />
    </TouchableOpacity>
  );
};

export default MyButton;
