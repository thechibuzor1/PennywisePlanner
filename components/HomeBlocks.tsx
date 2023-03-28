/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {BasicStyles, textColor} from '../contants';
import * as Progress from 'react-native-progress';

export default function HomeBlocks({props}) {
  const width = Dimensions.get('window').width;
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.con}>
      <View style={[styles.iconBg, {backgroundColor: props.backgroundColor}]}>
        <FontAwesomeIcon
          icon={props.icon}
          size={30}
          color={textColor}
          style={{margin: 10}}
        />
      </View>

      <View style={{flex: 1}}>
        <View style={BasicStyles.spaceBtw}>
          <Text style={[BasicStyles.header, {fontSize: 21, lineHeight: 28}]}>
            {props.name}
          </Text>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 17, lineHeight: 24, color: '#9FA4B4'},
            ]}>
            Left: <Text style={{color: '#000000'}}>${props.left}</Text>
          </Text>
        </View>
        <Progress.Bar
          progress={Number(props.spent) / Number(props.budget)}
          height={3}
          color={'#44D7A8'}
          unfilledColor={'white'}
          width={width - 100}
          style={{marginTop: 10}}
        />
        <View style={BasicStyles.spaceBtw}>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 17, lineHeight: 24, color: '#9FA4B4'},
            ]}>
            Spent: <Text style={{color: textColor}}>${props.spent}</Text>
          </Text>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 17, lineHeight: 24, color: '#9FA4B4'},
            ]}>
            Budget: <Text style={{color: textColor}}>${props.budget}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  con: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBg: {
    marginRight: 15,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: textColor,
  },
});
