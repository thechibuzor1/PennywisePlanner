/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import { BasicStyles, textColor } from '../contants';

export default function Settings({navigation}) {
  return (
    <SafeAreaView style={BasicStyles.container}>
      <View style={{marginTop: 30, paddingBottom: 15}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.5}
          style={{
            position: 'absolute',
            marginLeft: 15,
            borderWidth: 2,
            borderBottomWidth: 4,
            borderRadius: 30,
            width: 48,
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor:textColor
          }}>
          <FontAwesomeIcon
            icon={solid('chevron-left')}
            size={22}
            color={textColor}
          />
        </TouchableOpacity>
        <Text
          style={[
            BasicStyles.header,
            {
              marginTop: 10,
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 27,
              lineHeight: 32,
            },
          ]}>
          Settings
        </Text>
      </View>

      <Text
        style={[
          BasicStyles.subheader,
          {
            marginTop: 20,
            marginLeft: 15,
            fontSize: 21,
            lineHeight: 28,
          },
        ]}>
        General
      </Text>
      <View
        style={{
          padding: 18,
          borderWidth: 2,
          margin: 15,
          borderRadius: 16,
          borderBottomWidth: 4,
          borderColor:textColor
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[BasicStyles.spaceBtw, {alignItems: 'center', marginTop: 5}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 15,
            }}>
            <FontAwesomeIcon
              icon={solid('circle')}
              size={20}
              color={'#44D7A8'}
            />
            <Text
              style={[
                BasicStyles.header,
                {
                  marginLeft: 10,
                  fontSize: 17,
                  lineHeight: 24,
                },
              ]}>
              Theme
            </Text>
          </View>

          <FontAwesomeIcon
            icon={solid('chevron-right')}
            size={20}
            color={textColor}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={[BasicStyles.spaceBtw, {alignItems: 'center', marginTop: 5}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 15,
            }}>
            <FontAwesomeIcon
              icon={solid('circle')}
              size={20}
              color={'#44D7A8'}
            />
            <Text
              style={[
                BasicStyles.header,
                {
                  marginLeft: 10,
                  fontSize: 17,
                  lineHeight: 24,
                },
              ]}>
              Color
            </Text>
          </View>

          <FontAwesomeIcon
            icon={solid('chevron-right')}
            size={20}
            color={textColor}
          />
        </TouchableOpacity>
      </View>

      <Text
        style={[
          BasicStyles.subheader,
          {
            marginTop: 20,
            marginLeft: 15,
            fontSize: 21,
            lineHeight: 28,
          },
        ]}>
        Your Data
      </Text>
      <View
        style={{
          padding: 18,
          borderWidth: 2,
          margin: 15,
          borderRadius: 16,
          borderBottomWidth: 4,
          borderColor:textColor
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[BasicStyles.spaceBtw, {alignItems: 'center', marginTop: 5}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 15,
            }}>
            <FontAwesomeIcon
              icon={solid('circle')}
              size={20}
              color={'#44D7A8'}
            />
            <Text
              style={[
                BasicStyles.header,
                {
                  marginLeft: 10,
                  fontSize: 17,
                  lineHeight: 24,
                },
              ]}>
              Account
            </Text>
          </View>

          <FontAwesomeIcon
            icon={solid('chevron-right')}
            size={20}
            color={textColor}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={[BasicStyles.spaceBtw, {alignItems: 'center', marginTop: 5}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 15,
            }}>
            <FontAwesomeIcon
              icon={solid('circle')}
              size={20}
              color={'#FF9692'}
            />
            <Text
              style={[
                BasicStyles.header,
                {
                  marginLeft: 10,
                  fontSize: 17,
                  lineHeight: 24,
                },
              ]}>
              Delete all Data
            </Text>
          </View>

          <FontAwesomeIcon
            icon={solid('chevron-right')}
            size={20}
            color={textColor}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
