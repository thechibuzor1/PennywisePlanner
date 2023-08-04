/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {BarChart, PieChart} from 'react-native-gifted-charts';
import {
  BasicStyles,
  HistoryData,
  categories,
  demoHistory,
  getSpent,
  overViewData,
} from '../contants';
import HistoryBlocks from '../components/HistoryBlocks';
import moment from 'moment';
import {getHistoryTotal} from '../contants';
import MessageBox from '../components/MessageBox';
import {useSelector} from 'react-redux';

export default function Stats({navigation}) {
  const data = useSelector(state => state.dataReducers.data);
  const history = useSelector(state => state.historyReducer.data);
  const colors = useSelector(state => state.themeReducer.data);

  // Function to group history data by weeks and return the current week's data
  /* function groupDataByWeeks(
    data: HistoryData[],
  ): [Record<string, HistoryData[]>, HistoryData[]] {
    const groupedData: Record<string, HistoryData[]> = {};
    const currentDate = moment();
    const currentWeekNumber = currentDate.isoWeek().toString();
    const currentWeekData: HistoryData[] = [];

    data.forEach(item => {
      const weekNumber = moment(item.date, 'D MMM YYYY').isoWeek().toString();

      if (!groupedData[weekNumber]) {
        groupedData[weekNumber] = [];
      }

      if (weekNumber === currentWeekNumber) {
        currentWeekData.push(item);
      }

      groupedData[weekNumber].push(item);
    });

    return [groupedData, currentWeekData];
  }

  // Group the history data by weeks and get the current week's data
  const [groupedData, currentWeekData] = groupDataByWeeks(demoHistory); */

  // Output the grouped data
  /* console.log(groupedData); */

  // Output the current week's data
  /*  console.log(currentWeekData); */

  // Function to group history data by weeks and update the barData list with daily amounts
  function groupDataByWeeks(
    data: HistoryData[],
    barData: {value: number; frontColor: string}[],
  ): void {
    const currentDate = moment();
    const currentWeekNumber = currentDate.isoWeek().toString();
    const dailyAmounts: number[] = [0, 0, 0, 0, 0, 0, 0]; // Array to store daily amounts (Sunday to Saturday)

    data.forEach(item => {
      const weekNumber = moment(item.date, 'D MMM YYYY').isoWeek().toString();

      if (weekNumber === currentWeekNumber) {
        const dayOfWeek = moment(item.date, 'D MMM YYYY').isoWeekday();
        dailyAmounts[dayOfWeek - 1] += parseInt(item.amount, 10); // Increment the daily amount
      }
    });

    dailyAmounts.forEach((amount, index) => {
      barData[index].value = amount; // Update the value in barData with the daily amount
    });
  }
  // Define the initial barData list with placeholders
  const barData = [
    {value: 0, frontColor: '#E9E7FC'},
    {value: 0, frontColor: '#FFF4CC'},
    {value: 0, frontColor: '#F5F5F7'},
    {value: 0, frontColor: '#FFF3F8'},
    {value: 0, frontColor: '#D6FCF7'},
    {value: 0, frontColor: '#F5F5F7'},
    {value: 0, frontColor: '#F5F5F7'},
  ];

  // Group the history data by weeks and update the barData list with daily amounts
  groupDataByWeeks(history, barData);
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const dayWithLargestValue = barData.reduce((prev, current, currentIndex) => {
    if (current.value > barData[prev].value) {
      return currentIndex;
    } else {
      return prev;
    }
  }, 0);

  const dayOfWeekWithLargestValue = daysOfWeek[dayWithLargestValue];

  // Output the updated barData list

  // ... Previous code ...

  const [selectedData, setSelectedData] = useState<HistoryData[]>(history); // Initial selected data is empty

  // Handler for the button to set data for this week
  const handleThisWeekClick = () => {
    const startOfWeek = moment().utc().startOf('week');
    const endOfWeek = moment().utc().endOf('week');

    const thisWeekData = history.filter(category => {
      const categoryDate = moment(category.date, 'D MMM YYYY').utc();
      return categoryDate.isBetween(startOfWeek, endOfWeek, undefined, '[]');
    });

    setSelectedData(thisWeekData);
  };

  // Handler for the button to set data for this month
  const handleThisMonthClick = () => {
    const startOfMonth = moment().utc().startOf('month');
    const endOfMonth = moment().utc().endOf('month');

    const thisMonthData = history.filter(category => {
      const categoryDate = moment(category.date, 'D MMM YYYY').utc();
      return categoryDate.isBetween(startOfMonth, endOfMonth, undefined, '[]');
    });

    setSelectedData(thisMonthData);
  };

  // Handler for the button to set data for this year
  const handleThisYearClick = () => {
    const startOfYear = moment().utc().startOf('year');
    const endOfYear = moment().utc().endOf('year');
    const thisYearData = history.filter(category => {
      const categoryDate = moment(category.date, 'D MMM YYYY').utc();
      return categoryDate.isBetween(startOfYear, endOfYear, undefined, '[]');
    });

    setSelectedData(thisYearData);
  };

  const handleAllDataClick = () => {
    setSelectedData(history);
  };

  const pieData = selectedData.reduce(
    (
      accumulator: {
        [name: string]: {value: number; color: string; name: string};
      },
      category,
    ) => {
      const {name, amount, backgroundColor} = category;
      if (accumulator[name]) {
        accumulator[name].value += Number(amount);
      } else {
        accumulator[name] = {
          value: Number(amount),
          color: backgroundColor,
          name,
        };
      }
      return accumulator;
    },
    {},
  );

  const pieChartData = Object.values(pieData);

  const categoryWithHighestSpent =
    pieChartData.length !== 0
      ? pieChartData.reduce((prev, current) =>
          current.value > prev.value ? current : prev,
        )
      : null;

  const categoryNameWithHighestSpent =
    pieChartData.length !== 0 ? categoryWithHighestSpent?.name : null;

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
  /*  const barData = [
    {value: 0, frontColor: '#E9E7FC'},
    {value: 400, frontColor: '#FFF4CC'},
    {value: 800, frontColor: '#F5F5F7'},
    {value: 5000, frontColor: '#FFF3F8'},
    {value: 0, frontColor: '#D6FCF7'},
    {value: 0, frontColor: '#F5F5F7'},
    {value: 0, frontColor: '#F5F5F7'},
  ]; */

  /* const pieData = [
    {value: 240, color: '#F95A2C', name: 'Grocery'},
    {value: 925, color: '#44D7A8', name: 'Shopping'},
    {value: 120, color: '#FFBD12', name: 'Travel'},
    {value: 921, color: '#1947E5', name: 'Food'},
  ]; */

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
            {fontSize: 15, lineHeight: 24, color: colors.componentTxtColor},
          ]}>
          {props.name}
        </Text>
        <Text
          style={[
            BasicStyles.header,
            {fontSize: 20, lineHeight: 28, color: colors.textColor},
          ]}>
          ₦{props.spent.toLocaleString()}
        </Text>
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
              fontSize: 25,
              lineHeight: 32,
            },
          ]}>
          Statistics
        </Text>
        <TouchableOpacity
          onPress={() => {
            setShowPie(!showPie);
            handleThisWeekClick();
          }}
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
                data={pieChartData}
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
                {pieChartData.map(item => (
                  <RenderLegend key={item.name} props={item} />
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
              ? `Your highest expense ${textInfo} is ${categoryNameWithHighestSpent}.`
              : `You spent the most this week on ${dayOfWeekWithLargestValue}.`}
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
                handleThisWeekClick();
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
                handleThisMonthClick();
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
                handleThisYearClick();
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
                handleAllDataClick();
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
                {fontSize: 15, lineHeight: 24, color: colors.themeColor},
              ]}>
              Spent
            </Text>
            <Text
              style={[
                BasicStyles.header,
                {fontSize: 20, lineHeight: 28, color: colors.textColor},
              ]}>
              ₦{getHistoryTotal(history).toLocaleString()}
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
        {!closeMessage && (
          <MessageBox
            setCloseMessage={setCloseMessage}
            start={"Stay on track! You're doing great with your"}
            mid={'savings'}
            end={'this month.'}
            
          />
        )}
        {data.length !== 0 && (
          <FlatList
            style={{marginTop: 25, paddingLeft: 16}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data.sort(
              (a: categories, b: categories) => b.spent - a.spent,
            )}
            renderItem={data => <Blocks props={data.item} />}
          />
        )}
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
          data={history.slice(0, 5)}
          renderItem={data => <HistoryBlocks props={data.item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
