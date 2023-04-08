/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BasicStyles, colors} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import * as Progress from 'react-native-progress';

export default function BudgetCategories({
  props,
  setSelectedCategory,
  selectedCategory,
  edit,
}) {
  function handlePress(name: string) {
    if (!edit) {
      if (name === selectedCategory) {
        setSelectedCategory('');
        return;
      }
      setSelectedCategory(props.name);
    }
  }

  return (
    <TouchableOpacity
      onPress={() => handlePress(props.name)}
      activeOpacity={0.8}
      style={{
        flex: 1,
        borderRadius: 16,
        borderWidth: 2,
        borderBottomWidth: selectedCategory === props.name ? 2 : 4,
        padding: 16,
        margin: 5,

        borderColor: colors.textColor,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: edit
          ? 0.5
          : selectedCategory === ''
          ? 1
          : selectedCategory === props.name
          ? 1
          : 0.5,
      }}>
      {selectedCategory !== props.name ? (
        <>
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
            <Text
              style={[
                BasicStyles.header,
                {
                  fontSize: 17,
                  lineHeight: 24,
                  color: colors.textColor,
                  fontFamily: 'Montserrat-Regular',
                },
              ]}>
              {props.budget}/M
            </Text>
          </View>
          <Progress.Bar
            progress={Number(props.spent) / Number(props.budget)}
            height={3}
            color={colors.themeColor}
            unfilledColor={'white'}
            style={{marginTop: 10, marginBottom: 5}}
          />
        </>
      ) : (
        <View>
          <TouchableOpacity activeOpacity={0.5} style={{}}>
            <FontAwesomeIcon
              icon={solid('pen-to-square')}
              size={35}
              style={{margin: 5}}
              color={colors.textColor}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={{marginTop: 10}}>
            <FontAwesomeIcon
              icon={solid('trash-can')}
              size={35}
              style={{margin: 5}}
              color={colors.textColor}
            />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
