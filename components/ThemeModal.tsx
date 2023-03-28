/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, bgColor, colors, setBg, textColor} from '../contants';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function ThemeModal({setShowThemeModal}) {
  const [value, setValue] = useState<string>(colors.background);
  let initial = 0;

  let radio_props = [
    {label: 'Off-white', value: '#fcf4e7'},
    {label: 'White', value: '#ffffff'},
    {label: 'Blue', value: '#7388b8'},
    {label: 'green', value: '#5eab6e'},
    {label: 'red', value: '#ea400e'},
    {label: 'darkBlue', value: '#046574'},
    {label: 'orange', value: '#e09c2c'},
    {label: 'pink', value: '#ec9aa2'},
    {label: 'purple', value: '#c4aaf5'},
    {label: 'dark', value: '#464646'},
  ];

  radio_props.forEach(element => {
    if (element.value === colors.background) {
      initial = radio_props.indexOf(element);
    }
  });

  return (
    <View style={BasicStyles.modalBgCon}>
      <SafeAreaView
        style={{
          backgroundColor: colors.background,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          borderWidth: 2,
          borderColor: textColor,
        }}>
        <View
          style={{
            marginTop: 15,
            paddingBottom: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 2,
          }}>
          <Text
            style={[
              BasicStyles.header,
              {
                marginTop: 5,
                marginLeft: 15,
                fontSize: 24,
                lineHeight: 28,
              },
            ]}>
            Theme
          </Text>
          <TouchableOpacity
            onPress={() => setShowThemeModal(false)}
            activeOpacity={0.5}
            style={{marginRight: 15}}>
            <FontAwesomeIcon
              icon={solid('xmark')}
              size={25}
              color={textColor}
            />
          </TouchableOpacity>
        </View>
        <RadioForm
          radio_props={radio_props}
          onPress={value => {
            colors.background = value;
            setValue(value);
          }}
          initial={initial}
          labelStyle={[
            BasicStyles.header,
            {
              fontSize: 17,
              lineHeight: 24,
              marginBottom: 18,
            },
          ]}
          buttonSize={16}
          buttonColor={textColor}
          selectedButtonColor={textColor}
          style={{
            padding: 16,
            marginTop: 10,
          }}
          accessible={true}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
