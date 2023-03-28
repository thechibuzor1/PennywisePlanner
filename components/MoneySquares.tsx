/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BasicStyles, bgColor, textColor} from '../contants';

export default function MoneySquares(props) {
  return (
    <TouchableOpacity
      onPress={() => props.setSelected(props.amount)}
      activeOpacity={0.5}
      style={[
        styles.con,
        {
          borderBottomWidth: props.selected === props.amount ? 2 : 4,
          opacity:
            props.selected === ''
              ? 1
              : props.selected === props.amount
              ? 1
              : 0.5,
        },
      ]}>
      <Text
        style={[
          BasicStyles.header,
          {fontSize: 17, lineHeight: 24, color: textColor, padding: 16},
        ]}>
        ${props.amount}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 4,
    margin: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});
