/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, colors} from '../contants';
import RadioForm from 'react-native-simple-radio-button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function ThemeModal({setShowThemeModal}) {
  const [value, setValue] = useState<string>(colors.background);
  let initial = 0;

  let radio_props = [
    {label: 'Off white', value: '#fcf4e7'},
    {label: 'White', value: '#F5F5F7'},
    {label: 'Blue', value: '#7388b8'},
    {label: 'Green', value: '#5eab6e'},
    {label: 'Red', value: '#ea400e'},
    {label: 'Dark blue', value: '#046574'},
    {label: 'Orange', value: '#e09c2c'},
    {label: 'Pink', value: '#ec9aa2'},
    {label: 'Purple', value: '#c4aaf5'},
    {label: 'Dark', value: '#464646'},
    {label: 'Lights out', value: '#1D1D1F'},
  ];

  radio_props.forEach(element => {
    if (element.value === colors.background) {
      initial = radio_props.indexOf(element);
    }
  });

  function handleThemes(val: string) {
    colors.background = val;
    if (val === '#1D1D1F') {
      colors.textColor = '#F5F5F7';
      StatusBar.setBarStyle('light-content');
    } else {
      colors.textColor = '#1D1D1F';
      StatusBar.setBarStyle('dark-content');
    }

    setValue(val);
  }

  return (
    <View style={BasicStyles.modalBgCon}>
      <SafeAreaView
        style={{
          width: 400,
          margin: 5,
          marginBottom: 0,
          alignSelf: 'center',
          backgroundColor: colors.background,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          borderWidth: 2,
          borderColor: colors.textColor,
        }}>
        <View
          style={{
            marginTop: 15,
            paddingBottom: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 2,
            borderColor: colors.textColor,
          }}>
          <Text
            style={[
              BasicStyles.header,
              {
                color: colors.textColor,
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
              color={colors.textColor}
            />
          </TouchableOpacity>
        </View>
        <RadioForm
          radio_props={radio_props}
          onPress={(val: string) => handleThemes(val)}
          initial={initial}
          labelStyle={[
            BasicStyles.header,
            {
              fontSize: 17,
              lineHeight: 24,
              marginBottom: 18,
              color: colors.textColor,
            },
          ]}
          buttonSize={16}
          buttonColor={colors.textColor}
          selectedButtonColor={colors.textColor}
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
