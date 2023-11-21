//react components
import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
//custom components
import MyText from 'components/MyText/MyText';
//global
import {Colors, Fonts, MyIcon} from 'global/Index';

const MyTextInput = ({
  inputRef,
  value,
  placeholder,
  secureTextEntry,
  numberOfLines,
  Icon,
  width = '100%',
  multiline,
  placeholderTextColor = '#c9c9c9',
  onChangeText,
  textInputWidth = '85%',
  onPress = () => {},
  showPassword,
  maxLength,
  keyboardType,
  onSubmitEditing,
  disabled = true,
  editable = true,
  textInputStyle,
  height = 55,
}) => {
  //states
  const [showEnteredValue, setshowEnteredValue] = useState(secureTextEntry);
  //UI
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        backgroundColor: Colors.WHITE,
        shadowRadius: 15,
        elevation: 2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        height: height,
        width: width,
        paddingHorizontal: 10,
      }}>
      <TextInput
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        secureTextEntry={showEnteredValue}
        numberOfLines={numberOfLines}
        allowFontScaling={false}
        multiline={multiline}
        onChangeText={onChangeText}
        maxLength={maxLength}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        onSubmitEditing={onSubmitEditing}
        editable={editable}
        style={{
          ...textInputStyle,
          color: Colors.BLACK,
          fontFamily: Fonts.BOLD,
          width: textInputWidth,
          paddingLeft: 5,
          height: '100%',
        }}
      />
      {showPassword ? (
        <>
          {Icon ? (
            <TouchableOpacity
              onPress={() => setshowEnteredValue(!showEnteredValue)}>
              {Icon}
            </TouchableOpacity>
          ) : null}
        </>
      ) : (
        <>{Icon ? Icon : null}</>
      )}
    </TouchableOpacity>
  );
};

export default MyTextInput;
