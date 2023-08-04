/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BasicStyles} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {useSelector} from 'react-redux';
interface Btn {
  name: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SettinngsBtns(props: Btn) {
  const colors = useSelector(state => state.themeReducer.data);
  return (
    <TouchableOpacity
      onPress={() => props.setModal(true)}
      activeOpacity={0.5}
      style={[
        BasicStyles.spaceBtw,
        {alignItems: 'center', marginTop: 5, height: 56},
      ]}>
      <View style={styles.leftI}>
        <FontAwesomeIcon
          icon={solid('circle')}
          size={20}
          color={
            props.name === 'Delete all Data' ? '#FF9692' : colors.themeColor
          }
        />
        <Text
          style={[BasicStyles.header, styles.name, {color: colors.textColor}]}>
          {props.name}
        </Text>
      </View>

      <FontAwesomeIcon
        icon={solid('chevron-right')}
        size={20}
        color={colors.textColor}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  leftI: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  name: {
    marginLeft: 10,
    fontSize: 17,
    lineHeight: 24,
  },
});
