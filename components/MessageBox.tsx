/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BasicStyles} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {useSelector} from 'react-redux';

const MessageBox = props => {
  const colors = useSelector(state => state.themeReducer.data);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.altStyle
            ? colors.themeColor
            : colors.background,
          borderColor: colors.textColor,
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.closeBtn,
          {
            borderColor: colors.textColor,
          },
        ]}
        onPress={() => props.setCloseMessage(true)}>
        <FontAwesomeIcon
          icon={solid('xmark')}
          size={30}
          color={props.altStyle ? colors.background : colors.themeColor}
        />
      </TouchableOpacity>
      <Text
        style={[
          BasicStyles.header,
          {color: colors.textColor, margin: 20, marginTop: 5},
        ]}>
        {props.start}
        <Text
          style={{
            color: props.altStyle ? colors.background : colors.themeColor,
          }}>
          {' '}
          {props.mid}{' '}
        </Text>
        {props.end}
      </Text>
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    maxWidth: 350,
    margin: 15,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 15,
  },
});
