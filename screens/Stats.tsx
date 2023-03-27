/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, overViewData} from '../contants';
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
      }}>
      <FontAwesomeIcon
        icon={props.icon}
        size={35}
        style={{margin: 15, marginBottom: 5}}
        color={'#000000'}
      />
      <View style={{margin: 15}}>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 17, lineHeight: 24, color: '#ffffff'},
          ]}>
          {props.name}
        </Text>
        <Text style={[BasicStyles.header, {fontSize: 21, lineHeight: 28}]}>
          ${props.spent}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={BasicStyles.container}>
      <View style={{marginTop: 30}}>
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
          }}>
          <FontAwesomeIcon
            icon={solid('chevron-left')}
            size={22}
            color={'#000000'}
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
      <View style={{paddingTop: 30}}>
        <BarChart
          yAxisThickness={0}
          xAxisThickness={0}
          barWidth={48}
          data={barData}
          isAnimated
          noOfSections={4}
          spacing={0}
          dashWidth={0}
          initialSpacing={0}
          barStyle={{borderWidth: 2}}
          hideYAxisText={true}
        />
        <Divider
          width={2}
          color="#000000"
          style={{width: '90%', alignSelf: 'center'}}
        />
      </View>

      <View style={BasicStyles.statBtnCon}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setActive('1w')}
          style={[
            BasicStyles.statBtns,
            {backgroundColor: active === '1w' ? '#44D7A8' : '#ffffff'},
          ]}>
          <Text style={[BasicStyles.header, BasicStyles.statBtnText]}>1W</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setActive('1m')}
          style={[
            BasicStyles.statBtns,
            {backgroundColor: active === '1m' ? '#44D7A8' : '#ffffff'},
          ]}>
          <Text style={[BasicStyles.header, BasicStyles.statBtnText]}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setActive('1y')}
          style={[
            BasicStyles.statBtns,
            {backgroundColor: active === '1y' ? '#44D7A8' : '#ffffff'},
          ]}>
          <Text style={[BasicStyles.header, BasicStyles.statBtnText]}>1Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setActive('all')}
          style={[
            BasicStyles.statBtns,
            {backgroundColor: active === 'all' ? '#44D7A8' : '#ffffff'},
          ]}>
          <Text style={[BasicStyles.header, BasicStyles.statBtnText]}>ALL</Text>
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
            }}>
            <FontAwesomeIcon
              icon={solid('arrow-up-long')}
              size={22}
              color={'#000000'}
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
            <Text style={[BasicStyles.header, {fontSize: 21, lineHeight: 28}]}>
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
            }}>
            <FontAwesomeIcon
              icon={solid('arrow-down-long')}
              size={22}
              color={'#000000'}
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
            <Text style={[BasicStyles.header, {fontSize: 21, lineHeight: 28}]}>
              $900
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        style={{marginTop: 25, paddingLeft: 16}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={overViewData}
        renderItem={data => <Blocks props={data.item} />}
      />
    </SafeAreaView>
  );
}
