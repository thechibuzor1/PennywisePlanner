/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BasicStyles, colors} from '../contants';

export default function DeleteAllData(props) {
  return (
    <View style={[BasicStyles.modalBgCon, {justifyContent: 'center'}]}>
      <View
        style={{
          maxWidth: 400,
          backgroundColor: colors.background,
          padding: 16,
          alignSelf: 'center',
          borderWidth: 2,
          borderColor: colors.textColor,
          borderRadius: 16,
        }}>
        <Text
          style={{
            color: colors.textColor,
            fontSize: 20,
            fontFamily: 'Montserrat-ExtraBold',
            marginBottom: 10,
            marginTop: 10,
          }}>
          Are you sure
        </Text>

        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            color: colors.themeColor,
          }}>
          Once you delete this you are not allowed to restore.
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            paddingLeft: 4,
            paddingRight: 4,
            marginTop: 8,
          }}>
          <TouchableOpacity
            onPress={() => props.setDeleteAll(false)}
            activeOpacity={0.7}
            style={{
              padding: 16,
              backgroundColor: colors.background,
              borderRadius: 16,
              borderWidth: 2,
              borderColor: colors.textColor,
            }}>
            <Text
              style={{
                color: colors.textColor,
                fontFamily: 'Montserrat-Bold',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.function()}
            activeOpacity={0.7}
            style={{
              padding: 16,
              backgroundColor: '#1D1D1F',
              borderRadius: 16,
              borderColor: colors.textColor,
              borderWidth: 2,
            }}>
            <Text
              style={{
                color: '#F5F5F7',
                fontFamily: 'Montserrat-Bold',
              }}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
