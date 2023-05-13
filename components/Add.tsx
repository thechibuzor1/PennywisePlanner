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
import {BasicStyles, overViewData, colors, MyCategories} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import MoneySquares from './MoneySquares';

export default function Add({setAdd, setData, data}) {
  /*  const [active, setActive] = useState<string>('out'); */
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
        padding: 32,
        margin: 5,

        backgroundColor: props.backgroundColor,
        borderColor: colors.textColor,
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
        style={{marginTop: 15}}
        color={colors.textColor}
      />
      <View style={{marginTop: 15}}>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 17, lineHeight: 24, color: colors.componentTxtColor},
          ]}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  function saveAdd() {
    const clonedData = [...data];
    clonedData.forEach(item => {
      if (item.name === selectedCategory) {
        item.spent += Number(selectedAmount);
      }
    });
    setData(clonedData);
    setSelectedCategory('');
    setSelectedAmount('');
  }

  return (
    <View style={BasicStyles.modalBgCon}>
      <SafeAreaView
        style={[BasicStyles.container, {backgroundColor: colors.background}]}>
        <View style={{marginTop: 30, paddingBottom: 15, marginLeft: 15}}>
          <Text
            style={[
              BasicStyles.header,
              {
                color: colors.textColor,
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
                color: colors.textColor,
                fontSize: 44,
                lineHeight: 54,
              },
            ]}>
            to logs
          </Text>
          <TouchableOpacity
            onPress={() => setAdd(false)}
            activeOpacity={0.5}
            style={[
              BasicStyles.backBtn,
              {right: 15, borderColor: colors.textColor},
            ]}>
            <FontAwesomeIcon
              icon={solid('xmark')}
              size={22}
              color={colors.textColor}
            />
          </TouchableOpacity>
        </View>

        {/*  <View
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
              Spent
            </Text>
          </TouchableOpacity>
        </View> */}

        <ScrollView showsVerticalScrollIndicator={false}>
          {/*   {active === 'out' && (
            <> */}
          <Text
            style={[
              BasicStyles.header,
              {
                margin: 15,
                fontSize: 27,
                lineHeight: 32,
                color: colors.textColor,
              },
            ]}>
            Select a category
          </Text>
          <View style={styles.moneyGrid}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              numColumns={2}
              renderItem={data => <Blocks props={data.item} />}
              keyExtractor={item => item.name}
            />
          </View>
          {/*      </>
          )} */}

          <Text
            style={[
              BasicStyles.header,
              {
                margin: 15,
                fontSize: 27,
                lineHeight: 32,
                color: colors.textColor,
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
            placeholderTextColor={colors.textColor}
            style={[
              styles.textInput,
              {color: colors.textColor, borderColor: colors.textColor},
            ]}
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
            onPress={saveAdd}
            activeOpacity={0.8}
            style={[
              styles.btn,
              {
                backgroundColor: colors.themeColor,
                borderRadius: 16,
                borderWidth: 2,

                alignSelf: 'center',
                margin: 16,
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
                  marginHorizontal: 40,
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
