/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BasicStyles,
  textColor,
  bgColor,
  overViewData,
  colors,
} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import MoneySquares from './MoneySquares';

export default function Add({setAdd}) {
  const [active, setActive] = useState<string>('out');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedAmount, setSelectedAmount] = useState<string>('');

  const Blocks = ({props}) => (
    <TouchableOpacity
      onPress={() => setSelectedCategory(props.name)}
      activeOpacity={0.8}
      style={{
        flex: 1,
        borderRadius: 16,
        borderWidth: 2,
        borderBottomWidth: selectedCategory === props.name ? 2 : 4,
        padding: 16,
        margin: 5,
        height: 175,
        Width: 155,
        backgroundColor: props.backgroundColor,
        borderColor: textColor,
        justifyContent: 'center',
        alignItems: 'center',
        opacity:
          selectedCategory === ''
            ? 1
            : selectedCategory === props.name
            ? 1
            : 0.5,
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
            {fontSize: 17, lineHeight: 24, color: colors.background},
          ]}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={BasicStyles.modalBgCon}>
      <SafeAreaView
        style={[BasicStyles.container, {backgroundColor: colors.background}]}>
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
            to logs
          </Text>
          <TouchableOpacity
            onPress={() => setAdd(false)}
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
            maxWidth: 400,
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
              {
                backgroundColor:
                  active === 'in' ? '#44D7A8' : colors.background,
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
                  color: active === 'in' ? colors.background : textColor,
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
              {
                backgroundColor:
                  active === 'out' ? '#44D7A8' : colors.background,
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
                  color: active === 'out' ? colors.background : textColor,
                },
              ]}>
              Spent
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false}>
          {active === 'out' && (
            <>
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
              <View style={styles.app}>
                <FlatList
                  data={overViewData}
                  numColumns={2}
                  renderItem={data => <Blocks props={data.item} />}
                  keyExtractor={item => item.name}
                />
              </View>
            </>
          )}

          <Text
            style={[
              BasicStyles.header,
              {
                margin: 15,
                fontSize: 27,
                lineHeight: 32,
              },
            ]}>
            How much?
          </Text>

          <TextInput
            keyboardType="number-pad"
            value={selectedAmount}
            onChangeText={text =>
              setSelectedAmount(text.replace(/[^0-9]/g, ''))
            }
            placeholder="Enter amount"
            style={styles.textInput}
          />

          <View style={styles.moneyGrid}>
            <MoneySquares
              selected={selectedAmount}
              setSelected={setSelectedAmount}
              amount={'500'}
            />
            <MoneySquares
              selected={selectedAmount}
              setSelected={setSelectedAmount}
              amount={'1000'}
            />
            <MoneySquares
              selected={selectedAmount}
              setSelected={setSelectedAmount}
              amount={'2000'}
            />
            <MoneySquares
              selected={selectedAmount}
              setSelected={setSelectedAmount}
              amount={'5000'}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.btn,
              {
                backgroundColor: '#44D7A8',
                borderRadius: 16,
                borderWidth: 2,
                width: 400,
                alignSelf: 'center',
                margin: 16,
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
    backgroundColor: colors.background,
    borderColor: textColor,
  },
  textInput: {
    width: 200,
    alignSelf: 'center',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 16,
    fontSize: 21,
    color: textColor,
    lineHeight: 28,
    fontFamily: 'Montserrat-Regular',
    padding: 16,
  },
  moneyGrid: {
    alignSelf: 'center',
    marginTop: 15,
    marginHorizontal: 'auto',
    width: 400,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
