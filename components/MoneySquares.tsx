/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BasicStyles} from '../contants';
import {useSelector} from 'react-redux';

export default function MoneySquares(props: any) {
  const colors = useSelector(state => state.themeReducer.data);
  return (
    <TouchableOpacity
      onPress={() => props.setSelected(props.amount)}
      activeOpacity={0.5}
      style={[
        styles.con,
        {
          borderColor: colors.textColor,
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
          {fontSize: 15, lineHeight: 24, color: colors.textColor, padding: 16},
        ]}>
        ₦{Number(props.amount).toLocaleString()}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    minWidth: 100,
    maxWidth: 120,
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
