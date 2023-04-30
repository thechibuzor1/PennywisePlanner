/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BasicStyles, colors, overViewData, MyCategories} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import HomeBlocks from './HomeBlocks';

export default function Categories({setShowCategoriesodal, data}) {
  return (
    <View style={BasicStyles.modalBgCon}>
      <TouchableOpacity
        onPress={() => setShowCategoriesodal(false)}
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
          flex: 0.9,
          width: 400,
          margin: 5,
          marginBottom: 0,
          backgroundColor: colors.background,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          borderWidth: 2,
          alignSelf: 'center',
          borderTopWidth: 6,
          borderColor: colors.textColor,
        }}>
        <View
          style={{
            marginTop: 30,
            paddingBottom: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={[
              BasicStyles.header,
              {
                color: colors.textColor,
                marginTop: 5,
                marginLeft: 15,
                fontSize: 24,
                lineHeight: 28,
              },
            ]}>
            My Categories
          </Text>
        </View>

        <ScrollView
          style={{paddingTop: 16}}
          showsVerticalScrollIndicator={false}>
          {data.map((item, i) => (
            <HomeBlocks key={i} props={item} />
          ))}
          {/*  <TouchableOpacity
            activeOpacity={0.5}
            style={[
              styles.plus,
              {
                backgroundColor: colors.background,
                borderColor: colors.textColor,
              },
            ]}>
            <FontAwesomeIcon
              icon={solid('plus')}
              size={22}
              color={colors.textColor}
              style={{
                margin: 15,
              }}
            />
          </TouchableOpacity> */}
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
});
