/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BasicStyles} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import * as Progress from 'react-native-progress';
import {useSelector} from 'react-redux';

export default function BudgetCategories({
  props,
  setSelectedCategory,
  selectedCategory,
  setDeleteAllData,
  setAllocate,
}) {
  const colors = useSelector(state => state.themeReducer.data);
  function handlePress(props) {
    if (props.name === selectedCategory.name) {
      setSelectedCategory({});
      return;
    }
    setSelectedCategory(props);
  }
  /* function deleteCategory(props) {
    const clonedData = [...data];
    clonedData.forEach(ele => {
      if (ele.name === props.name) {
        let index = clonedData.indexOf(ele);
        console.log(index);
        clonedData.splice(index, 1);
        setData(clonedData);
        setSelectedCategory({});
      }
    });
  } */

  return (
    <TouchableOpacity
      onPress={() => handlePress(props)}
      activeOpacity={0.8}
      style={{
        flex: 1,
        borderRadius: 16,
        borderWidth: 2,
        borderBottomWidth: selectedCategory.name === props.name ? 2 : 4,
        padding: 16,
        margin: 5,
        height: 180,
        borderColor: colors.textColor,
        justifyContent: 'center',
        alignItems: 'center',
        opacity:
          Object.keys(selectedCategory).length === 0
            ? 1
            : selectedCategory.name === props.name
            ? 1
            : 0.5,
      }}>
      {selectedCategory.name !== props.name ? (
        <>
          <View
            style={{
              alignSelf: 'flex-start',
            }}>
            <View
              style={{
                alignSelf: 'flex-start',
                borderWidth: 2,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: props.backgroundColor,
              }}>
              <FontAwesomeIcon
                icon={props.icon}
                size={25}
                style={{margin: 7}}
                color={colors.textColor}
              />
            </View>
            <View
              style={{
                marginTop: 15,

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontSize: 15,
                    lineHeight: 24,
                    color: colors.textColor,
                  },
                ]}>
                {props.name}
              </Text>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontSize: 15,
                    lineHeight: 24,
                    color: colors.textColor,
                    fontFamily: 'Montserrat-Regular',
                  },
                ]}>
                ₦{props.budget.toLocaleString()}/M
              </Text>
            </View>
          </View>
          <Progress.Bar
            progress={Number(props.spent) / Number(props.budget)}
            height={3}
            width={100}
            color={colors.themeColor}
            unfilledColor={'white'}
            style={{marginTop: 10, marginBottom: 5}}
          />
        </>
      ) : (
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setAllocate(true)}
            style={{}}>
            <FontAwesomeIcon
              icon={solid('pen-to-square')}
              size={35}
              style={{margin: 5}}
              color={colors.textColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setDeleteAllData(true)}
            style={{marginTop: 10}}>
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
