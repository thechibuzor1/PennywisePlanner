/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {useSelector} from 'react-redux';

const PopUp = props => {
  const colors = useSelector(state => state.themeReducer.data);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.background, borderColor: colors.textColor},
      ]}>
      <Text style={[styles.text, {color: colors.textColor}]}>{props.text}</Text>
    </View>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    zIndex: 999,
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 4,
    margin: 10,
  },
  text: {
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 30,
    margin: 10,
  },
});
