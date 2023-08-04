/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import ColorCircles from './ColorCircles';
import RadioForm from 'react-native-simple-radio-button';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ColorsModal({setShowColorsModal}) {
  const dispatch = useDispatch();
  const colors = useSelector(state => state.themeReducer.data);
  const [active, setActive] = useState<string>(colors.themeColor);

  const colorsData = [
    '#44D7A8',
    '#FFBD12',
    '#F95A2C',
    '#1947E5',
    '#FF89BB',
    '#adff14',
  ];

  const [value, setValue] = useState<string>(colors.textColor);
  let initial = 0;

  let radio_props = [
    {label: 'Black', value: '#1D1D1F'},
    {label: 'White', value: '#F5F5F7'},
  ];
  radio_props.forEach(element => {
    if (element.value === colors.textColor) {
      initial = radio_props.indexOf(element);
    }
  });

  async function handleTextColor(val: string) {
    try {
      if (val !== colors.background) {
        colors.textColor = val;

        if (val === '#1D1D1F') {
          StatusBar.setBarStyle('dark-content');
        } else {
          StatusBar.setBarStyle('light-content');
        }
        dispatch({type: 'SET_THEME', payload: colors});
        const jsonValue = JSON.stringify(colors);
        await AsyncStorage.setItem('theme', jsonValue);
        setValue(val);
      } else {
        Alert.alert('The text color matches the background...😐😑😐');
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={BasicStyles.modalBgCon}>
      <SafeAreaView
        style={{
          backgroundColor: colors.background,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          borderWidth: 2,
          borderColor: colors.textColor,
        }}>
        <View
          style={{
            marginTop: 20,
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

                marginLeft: 15,
                fontSize: 24,
                lineHeight: 28,
              },
            ]}>
            Color
          </Text>
          <TouchableOpacity
            onPress={() => setShowColorsModal(false)}
            activeOpacity={0.5}
            style={{marginRight: 15}}>
            <FontAwesomeIcon
              icon={solid('xmark')}
              size={25}
              color={colors.textColor}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Grid}>
          {colorsData.map(color => (
            <ColorCircles
              key={color}
              color={color}
              active={active}
              setActive={setActive}
            />
          ))}
        </View>

        <View style={{padding: 16}}>
          <Text
            style={[
              BasicStyles.header,
              {
                color: colors.textColor,

                fontSize: 17,
                lineHeight: 24,
              },
            ]}>
            Text Color
          </Text>
          <RadioForm
            radio_props={radio_props}
            onPress={(val: string) => handleTextColor(val)}
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
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  Grid: {
    alignSelf: 'center',
    marginTop: 15,
    marginHorizontal: 'auto',

    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
  },
});
