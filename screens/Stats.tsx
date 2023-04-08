/* eslint-disable react/no-unstable-nested-components */
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
import {BasicStyles, colors, overViewData} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {BarChart, PieChart} from 'react-native-gifted-charts';
import {Divider} from 'react-native-elements';

export default function Stats({navigation}) {
  const RenderLegend = ({props}) => {
    return (
      <View style={{flexDirection: 'row', margin: 12, alignItems: 'center'}}>
        <View
          style={{
            height: 18,
            width: 18,
            marginRight: 10,
            borderRadius: 4,
            backgroundColor: props.color,
            borderWidth: 2,
            borderColor: colors.textColor,
          }}
        />
        <Text
          style={{
            color: colors.textColor,
            fontSize: 17,
            fontFamily: 'Montserrat-Regular',
          }}>
          {props.name}
        </Text>
      </View>
    );
  };
  const barData = [
    {value: 0, frontColor: '#E9E7FC'},
    {value: 400, frontColor: '#FFF4CC'},
    {value: 800, frontColor: '#FFFFFF'},
    {value: 5000, frontColor: '#FFF3F8'},
    {value: 0, frontColor: '#D6FCF7'},
    {value: 0, frontColor: '#FFFFFF'},
    {value: 0, frontColor: '#FFFFFF'},
  ];

  const pieData = [
    {value: 240, color: '#F95A2C', name: 'Grocery'},
    {value: 925, color: '#44D7A8', name: 'Shopping'},
    {value: 120, color: '#FFBD12', name: 'Travel'},
    {value: 921, color: '#1947E5', name: 'Food'},
  ];

  const [active, setActive] = useState<string>('1w');
  const [textInfo, setTextInfo] = useState<string>('this week');
  const [closeMessage, setCloseMessage] = useState<boolean>(false);
  const [showPie, setShowPie] = useState<boolean>(false);

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
        borderColor: colors.textColor,
      }}>
      <FontAwesomeIcon
        icon={props.icon}
        size={35}
        style={{margin: 15, marginBottom: 5}}
        color={colors.textColor}
      />
      <View style={{margin: 15}}>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 17, lineHeight: 24, color: colors.componentTxtColor},
          ]}>
          {props.name}
        </Text>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 21, lineHeight: 28, color: colors.textColor},
          ]}>
          ₦{props.spent}
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
          borderColor: colors.textColor,
        }}>
        <FontAwesomeIcon
          icon={props.icon}
          size={30}
          color={colors.textColor}
          style={{margin: 10}}
        />
      </View>

      <View style={{flex: 1}}>
        <View style={BasicStyles.spaceBtw}>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 21, lineHeight: 28, color: colors.textColor},
            ]}>
            {props.name}
          </Text>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 17, lineHeight: 24, color: colors.textColor},
            ]}>
            -₦{props.left}
          </Text>
        </View>

        <View style={BasicStyles.spaceBtw}>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 17, lineHeight: 24, color: colors.themeColor},
            ]}>
            30 May 2023
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={[BasicStyles.container, {backgroundColor: colors.background}]}>
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
            borderColor: colors.textColor,
          }}>
          <FontAwesomeIcon
            icon={solid('chevron-left')}
            size={22}
            color={colors.textColor}
          />
        </TouchableOpacity>
        <Text
          style={[
            BasicStyles.header,
            {
              color: colors.textColor,
              marginTop: 10,
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 27,
              lineHeight: 32,
            },
          ]}>
          Statistics
        </Text>
        <TouchableOpacity
          onPress={() => setShowPie(!showPie)}
          activeOpacity={0.5}
          style={{
            position: 'absolute',
            right: 15,
            marginLeft: 15,
            borderWidth: 2,
            borderBottomWidth: 4,
            borderRadius: 30,
            width: 48,
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.textColor,
          }}>
          <FontAwesomeIcon
            icon={showPie ? solid('chart-simple') : solid('chart-pie')}
            size={22}
            color={colors.textColor}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            margin: 15,
          }}>
          {showPie ? (
            <>
              <PieChart
                strokeColor={colors.textColor}
                strokeWidth={2}
                donut
                data={pieData}
                innerCircleColor={colors.textColor}
                innerCircleBorderWidth={2}
                innerCircleBorderColor={colors.textColor}
                showValuesAsLabels={true}
                showTextBackground={true}
              />
              <View
                style={{
                  alignSelf: 'center',
                  marginHorizontal: 'auto',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  padding: 16,
                }}>
                {pieData.map(item => (
                  <RenderLegend key={item.value} props={item} />
                ))}
              </View>
            </>
          ) : (
            <>
              <BarChart
                yAxisThickness={0}
                xAxisThickness={0}
                barWidth={38}
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
            </>
          )}
          <Text
            style={{
              color: colors.textColor,
              fontSize: 21,
              fontFamily: 'Montserrat-Regular',
              lineHeight: 28,
              textAlign: 'center',
            }}>
            {showPie
              ? ` Your highest expense ${textInfo} is Shopping.`
              : 'You spent the most this week on wednesday.'}
          </Text>
        </View>

        <Divider
          width={2}
          color={colors.textColor}
          style={{width: '90%', alignSelf: 'center'}}
        />
        {showPie && (
          <View style={BasicStyles.statBtnCon}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setActive('1w');
                setTextInfo('this week');
              }}
              style={[
                BasicStyles.statBtns,
                {
                  borderColor: colors.textColor,
                  backgroundColor:
                    active === '1w' ? colors.themeColor : colors.background,
                  borderBottomWidth: active === '1w' ? 2 : 4,
                },
              ]}>
              <Text
                style={[
                  BasicStyles.header,
                  BasicStyles.statBtnText,
                  {color: colors.textColor},
                ]}>
                1W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setActive('1m');
                setTextInfo('this month');
              }}
              style={[
                BasicStyles.statBtns,
                {
                  borderColor: colors.textColor,
                  backgroundColor:
                    active === '1m' ? colors.themeColor : colors.background,
                  borderBottomWidth: active === '1m' ? 2 : 4,
                },
              ]}>
              <Text
                style={[
                  BasicStyles.header,
                  BasicStyles.statBtnText,
                  {color: colors.textColor},
                ]}>
                1M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setActive('1y');
                setTextInfo('this year');
              }}
              style={[
                BasicStyles.statBtns,
                {
                  borderColor: colors.textColor,
                  backgroundColor:
                    active === '1y' ? colors.themeColor : colors.background,
                  borderBottomWidth: active === '1y' ? 2 : 4,
                },
              ]}>
              <Text
                style={[
                  BasicStyles.header,
                  BasicStyles.statBtnText,
                  {color: colors.textColor},
                ]}>
                1Y
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setActive('all');
                setTextInfo('all in all');
              }}
              style={[
                BasicStyles.statBtns,
                {
                  borderColor: colors.textColor,
                  backgroundColor:
                    active === 'all' ? colors.themeColor : colors.background,
                  borderBottomWidth: active === 'all' ? 2 : 4,
                },
              ]}>
              <Text
                style={[
                  BasicStyles.header,
                  BasicStyles.statBtnText,
                  {color: colors.textColor},
                ]}>
                ALL
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View
          style={[
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15,
            },
          ]}>
          <View
            style={{
              borderWidth: 2,
              borderBottomWidth: 4,
              borderRadius: 15,
              width: 52,
              height: 52,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: colors.textColor,
            }}>
            <FontAwesomeIcon
              icon={solid('arrow-up-long')}
              size={22}
              color={colors.textColor}
            />
          </View>
          <View style={{marginLeft: 5}}>
            <Text
              style={[
                BasicStyles.header,
                {fontSize: 17, lineHeight: 24, color: colors.themeColor},
              ]}>
              Spent
            </Text>
            <Text
              style={[
                BasicStyles.header,
                {fontSize: 21, lineHeight: 28, color: colors.textColor},
              ]}>
              ₦580
            </Text>
          </View>
        </View>
        {/* <View style={[BasicStyles.spaceBtw, {alignItems: 'center'}]}>
            <View
              style={{
                borderWidth: 2,
                borderBottomWidth: 4,
                borderRadius: 15,
                width: 52,
                height: 52,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: colors.textColor,
              }}>
              <FontAwesomeIcon
                icon={solid('arrow-down-long')}
                size={22}
                color={colors.textColor}
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
                style={[
                  BasicStyles.header,
                  {fontSize: 21, lineHeight: 28, color: colors.textColor},
                ]}>
                ₦900
              </Text>
            </View>
          </View> */}

        <View
          style={{
            display: closeMessage ? 'none' : 'flex',
            backgroundColor: colors.background,
            maxWidth: 350,
            margin: 15,
            borderRadius: 16,
            alignSelf: 'center',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: colors.textColor,
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
              color={colors.textColor}
            />
          </TouchableOpacity>
          <Text
            style={[
              BasicStyles.header,
              {color: colors.textColor, margin: 20, marginTop: 5},
            ]}>
            You spent <Text style={{color: colors.themeColor}}>₦1396</Text> less
            than the previous week.
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
              color: colors.textColor,
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
