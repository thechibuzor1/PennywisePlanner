/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, bgColor, overViewData, textColor} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {BarChart} from 'react-native-gifted-charts';
import {Divider} from 'react-native-elements';

export default function Stats({navigation}) {
  const barData = [
    {value: 15, frontColor: '#E9E7FC'},
    {value: 30, frontColor: '#FFF4CC'},
    {value: 26, frontColor: '#FFFFFF'},
    {value: 40, frontColor: '#FFF3F8'},
    {value: 70, frontColor: '#D6FCF7'},
    {value: 40, frontColor: '#FFFFFF'},
    {value: 89, frontColor: '#FFFFFF'},
  ];

  const [active, setActive] = useState<string>('1w');
  const [closeMessage, setCloseMessage] = useState<boolean>(false);

  const Blocks = ({props}) => (
    <View
      style={{
        borderRadius: 16,
        borderWidth: 2,
        borderBottomWidth: 4,
        height: 140,
        width: 150,
        marginRight: 30,
        backgroundColor: props.backgroundColor,
        borderColor: textColor,
      }}>
      <FontAwesomeIcon
        icon={props.icon}
        size={35}
        style={{margin: 15, marginBottom: 5}}
        color={textColor}
      />
      <View style={{margin: 15}}>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 17, lineHeight: 24, color: bgColor},
          ]}>
          {props.name}
        </Text>
        <Text style={[BasicStyles.header, {fontSize: 21, lineHeight: 28}]}>
          ${props.spent}
        </Text>
      </View>
    </View>
  );
  const HistoryBlocks = ({props}) => (
    <View
      style={{
        marginRight: 15,
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          marginRight: 15,
          backgroundColor: props.backgroundColor,
          borderRadius: 30,
          borderWidth: 2,
          borderColor: textColor,
        }}>
        <FontAwesomeIcon
          icon={props.icon}
          size={30}
          color={textColor}
          style={{margin: 10}}
        />
      </View>

      <View style={{flex: 1}}>
        <View style={BasicStyles.spaceBtw}>
          <Text style={[BasicStyles.header, {fontSize: 21, lineHeight: 28}]}>
            {props.name}
          </Text>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 17, lineHeight: 24, color: textColor},
            ]}>
            -${props.left}
          </Text>
        </View>

        <View style={BasicStyles.spaceBtw}>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 17, lineHeight: 24, color: '#9FA4B4'},
            ]}>
            30 May 2023
          </Text>
        </View>
      </View>
    </View>
  );

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
            borderColor: textColor,
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
          Statistics
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <BarChart
            yAxisThickness={0}
            xAxisThickness={0}
            barWidth={48}
            data={barData}
            isAnimated
            animationDuration={200}
            noOfSections={4}
            spacing={0}
            dashWidth={0}
            initialSpacing={0}
            barStyle={{borderWidth: 2}}
            hideYAxisText={true}
            activeOpacity={1}
          />
        </View>
        <Divider
          width={2}
          color={textColor}
          style={{width: '90%', alignSelf: 'center'}}
        />
        <View style={BasicStyles.statBtnCon}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setActive('1w')}
            style={[
              BasicStyles.statBtns,
              {
                backgroundColor: active === '1w' ? '#44D7A8' : bgColor,
                borderBottomWidth: active === '1w' ? 2 : 4,
              },
            ]}>
            <Text style={[BasicStyles.header, BasicStyles.statBtnText]}>
              1W
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setActive('1m')}
            style={[
              BasicStyles.statBtns,
              {
                backgroundColor: active === '1m' ? '#44D7A8' : bgColor,
                borderBottomWidth: active === '1m' ? 2 : 4,
              },
            ]}>
            <Text style={[BasicStyles.header, BasicStyles.statBtnText]}>
              1M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setActive('1y')}
            style={[
              BasicStyles.statBtns,
              {
                backgroundColor: active === '1y' ? '#44D7A8' : bgColor,
                borderBottomWidth: active === '1y' ? 2 : 4,
              },
            ]}>
            <Text style={[BasicStyles.header, BasicStyles.statBtnText]}>
              1Y
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setActive('all')}
            style={[
              BasicStyles.statBtns,
              {
                backgroundColor: active === 'all' ? '#44D7A8' : bgColor,
                borderBottomWidth: active === 'all' ? 2 : 4,
              },
            ]}>
            <Text style={[BasicStyles.header, BasicStyles.statBtnText]}>
              ALL
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            BasicStyles.spaceBtw,
            {width: '90%', alignSelf: 'center', marginTop: 15},
          ]}>
          <View style={[BasicStyles.spaceBtw, {alignItems: 'center'}]}>
            <View
              style={{
                borderWidth: 2,
                borderBottomWidth: 4,
                borderRadius: 15,
                width: 52,
                height: 52,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: textColor,
              }}>
              <FontAwesomeIcon
                icon={solid('arrow-up-long')}
                size={22}
                color={textColor}
              />
            </View>
            <View style={{marginLeft: 5}}>
              <Text
                style={[
                  BasicStyles.header,
                  {fontSize: 17, lineHeight: 24, color: '#9FA4B4'},
                ]}>
                Spending
              </Text>
              <Text
                style={[BasicStyles.header, {fontSize: 21, lineHeight: 28}]}>
                $580
              </Text>
            </View>
          </View>
          <View style={[BasicStyles.spaceBtw, {alignItems: 'center'}]}>
            <View
              style={{
                borderWidth: 2,
                borderBottomWidth: 4,
                borderRadius: 15,
                width: 52,
                height: 52,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: textColor,
              }}>
              <FontAwesomeIcon
                icon={solid('arrow-down-long')}
                size={22}
                color={textColor}
              />
            </View>
            <View style={{marginLeft: 5}}>
              <Text
                style={[
                  BasicStyles.header,
                  {fontSize: 17, lineHeight: 24, color: '#9FA4B4'},
                ]}>
                Income
              </Text>
              <Text
                style={[BasicStyles.header, {fontSize: 21, lineHeight: 28}]}>
                $900
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: closeMessage ? 'none' : 'flex',
            backgroundColor: bgColor,
            width: 350,
            borderRadius: 16,
            alignSelf: 'center',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: textColor,
            borderWidth: 2,
            borderBottomWidth: 4,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              alignSelf: 'flex-end',
              marginRight: 15,
              marginTop: 15,
            }}
            onPress={() => setCloseMessage(true)}>
            <FontAwesomeIcon
              icon={solid('xmark')}
              size={30}
              color={textColor}
            />
          </TouchableOpacity>
          <Text
            style={[
              BasicStyles.header,
              {color: textColor, margin: 20, marginTop: 5},
            ]}>
            You spent <Text style={{color: '#44D7A8'}}>$1396</Text> less than
            the previous week.
          </Text>
        </View>

        <FlatList
          style={{marginTop: 25, paddingLeft: 16}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={overViewData}
          renderItem={data => <Blocks props={data.item} />}
        />

        <Text
          style={[
            BasicStyles.header,
            {
              marginTop: 20,
              marginLeft: 15,
              fontSize: 27,
              lineHeight: 32,
            },
          ]}>
          History
        </Text>
        <FlatList
          style={{marginTop: 25, paddingLeft: 16}}
          showsVerticalScrollIndicator={false}
          data={overViewData}
          renderItem={data => <HistoryBlocks props={data.item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
