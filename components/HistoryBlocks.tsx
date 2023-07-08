/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {BasicStyles, HistoryData, colors} from '../contants';

const HistoryBlocks = ({props}: HistoryData) => (
  <View
    style={{
      marginRight: 15,
      marginBottom: 30,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <View
      style={{
        marginRight: 15,
        backgroundColor: props.backgroundColor,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.textColor,
      }}>
      <FontAwesomeIcon
        icon={props.icon}
        size={30}
        color={colors.textColor}
        style={{margin: 10}}
      />
    </View>

    <View style={{flex: 1}}>
      <View style={BasicStyles.spaceBtw}>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 15, lineHeight: 24, color: colors.textColor},
          ]}>
          {props.name}
        </Text>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 15, lineHeight: 24, color: colors.textColor},
          ]}>
          -₦{Number(props.amount).toLocaleString()}
        </Text>
      </View>

      <View style={BasicStyles.spaceBtw}>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 15, lineHeight: 24, color: colors.themeColor},
          ]}>
          {props.date}
        </Text>
      </View>
    </View>
  </View>
);
export default HistoryBlocks;

const styles = StyleSheet.create({});
