/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {BasicStyles} from '../contants';
import * as Progress from 'react-native-progress';
import {useSelector} from 'react-redux';

export default function HomeBlocks({props}: any) {
  const width = Dimensions.get('window').width;
  const colors = useSelector(state => state.themeReducer.data);
  return (
    <View style={styles.con}>
      <View
        style={[
          styles.iconBg,
          {
            backgroundColor: props.backgroundColor,
            borderColor: colors.textColor,
          },
        ]}>
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
              {fontSize: 15, lineHeight: 24, color: colors.themeColor},
            ]}>
            Left:{' '}
            <Text style={{color: colors.textColor}}>
              ₦{(props.budget - props.spent).toLocaleString()}
            </Text>
          </Text>
        </View>
        <Progress.Bar
          progress={Number(props.spent) / Number(props.budget)}
          height={3}
          color={colors.themeColor}
          unfilledColor={'white'}
          width={width - 100}
          style={{marginTop: 5}}
        />
        <View style={BasicStyles.spaceBtw}>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 15, lineHeight: 24, color: colors.themeColor},
            ]}>
            Spent:{' '}
            <Text style={{color: colors.textColor}}>
              ₦{props.spent.toLocaleString()}
            </Text>
          </Text>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 15, lineHeight: 24, color: colors.themeColor},
            ]}>
            Budget:{' '}
            <Text style={{color: colors.textColor}}>
              ₦{props.budget.toLocaleString()}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBg: {
    marginRight: 15,
    borderRadius: 30,
    borderWidth: 2,
  },
});
