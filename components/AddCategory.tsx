/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, colors} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import * as Progress from 'react-native-progress';
export default function AddCategory({props}) {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      activeOpacity={0.8}
      style={{
        flex: 1,
        borderRadius: 16,
        borderWidth: 2,
        borderBottomWidth: selected ? 2 : 4,
        padding: 16,
        margin: 5,

        borderColor: !selected ? colors.textColor : colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center',
        /*  opacity: edit
          ? 0.5
          : selectedCategory === ''
          ? 1
          : selectedCategory === props.name
          ? 1
          : 0.5, */
      }}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 30,
          marginTop: 5,
          alignSelf: 'flex-start',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: props.backgroundColor,
        }}>
        <FontAwesomeIcon
          icon={props.icon}
          size={35}
          style={{margin: 7}}
          color={colors.textColor}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          alignSelf: 'flex-start',
          alignItems: 'center',
        }}>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 17, lineHeight: 24, color: colors.textColor},
          ]}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
