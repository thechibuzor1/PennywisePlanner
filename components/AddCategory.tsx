/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, Categories, colors, overViewData} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import HomeBlocks from './HomeBlocks';
import AddCategoriesBlocks from './AddCategoriesBlocks';
import Allocate from './Allocate';
export default function AddCategory({setAdd}) {
  const [active, setActive] = useState<string>('out');
  const [allocate, setAllocate] = useState<boolean>(false);
  const [alloData, setAlloData] = useState({});
  return (
    <View style={BasicStyles.modalBgCon}>
      <TouchableOpacity
        onPress={() => setAdd(false)}
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
            marginTop: 30,
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
            Add a category
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            maxWidth: 400,
            margin: 15,
            alignSelf: 'center',
            borderWidth: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 30,
            marginBottom: 5,
            borderColor: colors.textColor,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActive('in')}
            style={[
              styles.btn,
              {
                backgroundColor:
                  active === 'in' ? colors.themeColor : colors.background,
              },
            ]}>
            <Text
              style={[
                BasicStyles.header,
                {
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 21,
                  lineHeight: 28,
                  color:
                    active === 'in'
                      ? colors.componentTxtColor
                      : colors.textColor,
                },
              ]}>
              Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActive('out')}
            style={[
              styles.btn,
              {
                backgroundColor:
                  active === 'out' ? colors.themeColor : colors.background,
              },
            ]}>
            <Text
              style={[
                BasicStyles.header,
                {
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 21,
                  lineHeight: 28,
                  color:
                    active === 'out'
                      ? colors.componentTxtColor
                      : colors.textColor,
                },
              ]}>
              Monthly
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          animated
          animationType="slide"
          visible={allocate}
          transparent
          onRequestClose={() => setAllocate(false)}>
          {
            <Allocate
              alloData={alloData}
              setAlloData={setAlloData}
              setAllocate={setAllocate}
            />
          }
        </Modal>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={BasicStyles.moneyGrid}>
            {Categories.map((item, i) => (
              <AddCategoriesBlocks
                setAlloData={setAlloData}
                setAllocate={setAllocate}
                key={i}
                props={item}
              />
            ))}
          </View>

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
  btn: {
    padding: 12,
    flex: 1,
    borderRadius: 30,
  },
});
