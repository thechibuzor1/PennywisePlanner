/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, Categories, colors, overViewData} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import HomeBlocks from './HomeBlocks';
import AddCategoriesBlocks from './AddCategoriesBlocks';
import {TextInput} from 'react-native-gesture-handler';
import MoneySquares from './MoneySquares';

export default function Allocate(props) {
  const [selectedAmount, setSelectedAmount] = useState<string>('');
  return (
    <View style={BasicStyles.modalBgCon}>
      <TouchableOpacity
        onPress={() => {
          props.setAlloData({});
          props.setAllocate(false);
        }}
        activeOpacity={0.5}
        style={{
          alignSelf: 'center',
          borderColor: colors.textColor,
          borderWidth: 2,
          borderRadius: 24,
          height: 48,
          width: 48,
          backgroundColor: colors.background,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <FontAwesomeIcon
          icon={solid('xmark')}
          size={25}
          color={colors.textColor}
        />
      </TouchableOpacity>
      <SafeAreaView
        style={{
          backgroundColor: colors.background,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          borderWidth: 2,
          borderTopWidth: 6,
          borderColor: colors.textColor,
        }}>
        <View
          style={{
            borderRadius: 16,

            padding: 16,

            margin: 5,
            borderColor: colors.textColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 30,
              alignSelf: 'flex-start',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: props.alloData.backgroundColor,
            }}>
            <FontAwesomeIcon
              icon={props.alloData.icon}
              size={35}
              style={{margin: 7}}
              color={colors.textColor}
            />
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              alignItems: 'center',
            }}>
            <Text
              style={[
                BasicStyles.header,
                {fontSize: 17, lineHeight: 24, color: colors.textColor},
              ]}>
              {props.alloData.name}
            </Text>
          </View>
        </View>

        <Text
          style={[
            BasicStyles.header,
            {
              color: colors.textColor,

              marginLeft: 15,
              fontSize: 24,
              marginBottom: 15,
              lineHeight: 28,
            },
          ]}>
          How much?
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                BasicStyles.header,
                {
                  color: colors.textColor,
                  fontFamily: 'Montserrat-Regular',
                  marginLeft: 15,
                  fontSize: 28,
                  marginRight: 5,
                  lineHeight: 28,
                },
              ]}>
              ₦
            </Text>
            <TextInput
              keyboardType="number-pad"
              value={selectedAmount}
              onChangeText={text =>
                setSelectedAmount(text.replace(/[^0-9]/g, ''))
              }
              placeholder="Enter amount"
              placeholderTextColor={colors.textColor}
              style={[
                styles.textInput,
                {color: colors.textColor, borderColor: colors.textColor},
              ]}
            />
          </View>
          <View style={styles.moneyGrid}>
            <MoneySquares
              selected={selectedAmount}
              setSelected={setSelectedAmount}
              amount={'5000'}
            />
            <MoneySquares
              selected={selectedAmount}
              setSelected={setSelectedAmount}
              amount={'10000'}
            />
            <MoneySquares
              selected={selectedAmount}
              setSelected={setSelectedAmount}
              amount={'20000'}
            />
            <MoneySquares
              selected={selectedAmount}
              setSelected={setSelectedAmount}
              amount={'50000'}
            />
          </View>

          {/* CHANGE TO TWO BUTTONS CHECK AMD X */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.btn,
              {
                backgroundColor: colors.themeColor,
                borderRadius: 16,
                borderWidth: 2,
                width: 400,
                alignSelf: 'center',
                margin: 16,
                marginTop: 0,
                borderColor: colors.textColor,
              },
            ]}>
            <Text
              style={[
                BasicStyles.header,
                {
                  color: colors.textColor,
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 21,
                  lineHeight: 28,
                },
              ]}>
              Add
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  plus: {
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'center',

    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 30,
  },
  btn: {
    padding: 12,
    flex: 1,
    borderRadius: 30,
  },
  textInput: {
    width: 200,
    alignSelf: 'center',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 16,
    fontSize: 21,

    lineHeight: 28,
    fontFamily: 'Montserrat-Regular',
    padding: 16,
  },
  moneyGrid: {
    alignSelf: 'center',
    marginTop: 15,
    marginHorizontal: 'auto',
    maxWidth: 400,
    flexDirection: 'row',
    margin: 15,
    flexWrap: 'wrap',
  },
});
