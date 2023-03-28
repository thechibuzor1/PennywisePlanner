/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, textColor, bgColor, overViewData} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Add() {
  const [active, setActive] = useState<string>('in');

  const Blocks = ({props}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        flex: 1,
        borderRadius: 16,
        borderWidth: 2,
        borderBottomWidth: 4,
        padding: 16,
        margin: 5,
        height: 175,
        Width: 155,
        backgroundColor: props.backgroundColor,
        borderColor: textColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon
        icon={props.icon}
        size={35}
        style={{}}
        color={textColor}
      />
      <View style={{marginTop: 15}}>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 17, lineHeight: 24, color: bgColor},
          ]}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)',
      }}>
      <SafeAreaView style={BasicStyles.container}>
        <View style={{marginTop: 30, paddingBottom: 15, marginLeft: 15}}>
          <Text
            style={[
              BasicStyles.header,
              {
                fontFamily: 'Montserrat-Regular',
                fontSize: 44,
                lineHeight: 54,
              },
            ]}>
            Add
          </Text>
          <Text
            style={[
              BasicStyles.header,
              {
                marginTop: 5,

                fontSize: 44,
                lineHeight: 54,
              },
            ]}>
            To Logs
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[BasicStyles.backBtn, {right: 15}]}>
            <FontAwesomeIcon
              icon={solid('xmark')}
              size={22}
              color={textColor}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 15,
            width: 350,
            alignSelf: 'center',
            borderWidth: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 30,
            marginBottom: 5,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActive('in')}
            style={[
              styles.btn,
              {backgroundColor: active === 'in' ? '#1947E5' : bgColor},
            ]}>
            <Text
              style={[
                BasicStyles.header,
                {
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 21,
                  lineHeight: 28,
                  color: active === 'in' ? bgColor : textColor,
                },
              ]}>
              Income
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActive('out')}
            style={[
              styles.btn,
              {backgroundColor: active === 'out' ? '#1947E5' : bgColor},
            ]}>
            <Text
              style={[
                BasicStyles.header,
                {
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 21,
                  lineHeight: 28,
                  color: active === 'out' ? bgColor : textColor,
                },
              ]}>
              Spent
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false}>
          <Text
            style={[
              BasicStyles.header,
              {
                margin: 15,
                fontSize: 27,
                lineHeight: 32,
              },
            ]}>
            Select a category
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.plus}>
            <FontAwesomeIcon
              icon={solid('plus')}
              size={22}
              color={textColor}
              style={{
                margin: 15,
              }}
            />
          </TouchableOpacity>

          <View style={styles.app}>
            <FlatList
              data={overViewData}
              numColumns={2}
              renderItem={data => <Blocks props={data.item} />}
              keyExtractor={item => item.name}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    flex: 1,
    borderRadius: 30,
  },
  app: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: 400,
    alignSelf: 'center',
  },
  plus: {
    alignSelf: 'center',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 30,
    backgroundColor: bgColor,
    borderColor: textColor,
  },
});
