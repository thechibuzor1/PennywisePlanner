/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {colors} from '../contants';

export default function ColorCircles(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        colors.themeColor = props.color;
        props.setActive(props.color);
      }}
      activeOpacity={0.7}
      style={{
        borderRadius: 30,
        backgroundColor: props.color,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: props.active === props.color ? 1 : 0.9,
        margin: 5,
        borderWidth: 2,
        borderBottomWidth: props.active === props.color ? 2 : 4,
        borderColor: colors.textColor,
      }}>
      <FontAwesomeIcon
        style={{padding: 16, opacity: props.active === props.color ? 1 : 0}}
        icon={solid('check')}
        size={25}
        color={colors.textColor}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
