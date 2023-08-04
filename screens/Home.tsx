/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Progress from 'react-native-progress';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Add from '../components/Add';
import Budget from '../components/Budget';
import Categories from '../components/Categories';
import Drawer from '../components/Drawer';
import HomeBlocks from '../components/HomeBlocks';
import {
  BasicStyles,
  HistoryData,
  categories,
  demoHistory,
  getBudget,
  getSpent,
  resetBudget,
} from '../contants';
import moment from 'moment';
import PopUp from '../components/PopUp';

export default function Home({navigation}) {
  const colors = useSelector(state => state.themeReducer.data);
  const dispatch = useDispatch();
  /* const isDarkMode = useColorScheme() === 'dark'; */
  const width = Dimensions.get('window').width;
  const [openDrawer, setDrawerOpen] = useState<boolean>(false);
  const [closeMessage, setCloseMessage] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(false);
  const [showCategoriesodal, setShowCategoriesodal] = useState<boolean>(false);
  const [budgetModal, setBudgetModal] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen(!openDrawer);
  };

  /* function setDataReduxMock() {
    dispatch({type: 'SET_DATA', payload: MyCategories});
    console.log('DISPATCH COMPLETE!');
  }

  useEffect(() => {
     resetBudget(data); 
    setDataReduxMock();
  }, []); */

  const data = useSelector(state => state.dataReducers.data);
  return (
    <SafeAreaProvider>
      <Drawer
        navigation={navigation}
        open={openDrawer}
        toggleDrawer={toggleDrawer}>
        <SafeAreaView
          style={[BasicStyles.container, {backgroundColor: colors.background}]}>
          <StatusBar
            barStyle={
              colors.background === '#1D1D1F'
                ? 'light-content'
                : colors.textColor === '#F5F5F7'
                ? 'light-content'
                : 'dark-content'
            }
            backgroundColor={colors.background}
          />

          <View style={styles.headerCon}>
            <View style={BasicStyles.spaceBtw}>
              <TouchableOpacity
                onPress={toggleDrawer}
                activeOpacity={0.5}
                style={{
                  paddingBottom: 8,
                  padding: 16,
                  paddingLeft: 0,
                }}>
                <FontAwesomeIcon
                  icon={solid('bars')}
                  size={30}
                  style={{}}
                  color={colors.textColor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBudgetModal(true)}
                activeOpacity={0.5}
                style={{
                  paddingBottom: 8,
                  padding: 16,
                  paddingRight: 0,
                }}>
                <FontAwesomeIcon
                  icon={solid('money-bills')}
                  size={30}
                  color={colors.textColor}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={[
                BasicStyles.header,
                {
                  color: colors.textColor,
                  fontFamily: 'Montserrat-Regular',
                  lineHeight: 40,
                },
              ]}>
              Hello,
            </Text>
            <Text style={[BasicStyles.header, {color: colors.textColor}]}>
              {useSelector(state => state.userReducer.name)}
            </Text>
            {data.length !== 0 && (
              <>
                <Text
                  style={[BasicStyles.subheader, {color: colors.themeColor}]}>
                  Current Balance
                </Text>
                <Text
                  style={[
                    BasicStyles.header,
                    {color: colors.textColor, fontSize: 40, marginTop: 5},
                  ]}>
                  ₦{(getBudget(data) - getSpent(data)).toLocaleString()}
                </Text>

                <Progress.Bar
                  progress={
                    data.length !== 0 ? getSpent(data) / getBudget(data) : 0
                  }
                  height={3}
                  color={colors.themeColor}
                  unfilledColor={'white'}
                  width={width - 30}
                  style={{marginTop: 15}}
                />

                <View style={BasicStyles.spaceBtw}>
                  <Text
                    style={[BasicStyles.subheader, {color: colors.themeColor}]}>
                    Spent:{' '}
                    <Text
                      style={[
                        BasicStyles.subheader,
                        {color: colors.textColor},
                      ]}>
                      ₦{getSpent(data).toLocaleString()}
                    </Text>
                  </Text>
                  <Text
                    style={[BasicStyles.subheader, {color: colors.themeColor}]}>
                    Budget:{' '}
                    <Text
                      style={[
                        BasicStyles.subheader,
                        {color: colors.textColor},
                      ]}>
                      ₦{getBudget(data).toLocaleString()}
                    </Text>
                  </Text>
                </View>
              </>
            )}
          </View>
          <TouchableOpacity
            onPress={() => setAdd(true)}
            activeOpacity={0.5}
            style={[
              BasicStyles.plusIcon,
              {
                display: data.length !== 0 ? (add ? 'none' : 'flex') : 'none',
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
          </TouchableOpacity>

          {data.length === 0 ? (
            <Text
              style={[
                BasicStyles.subheader,
                {
                  color: colors.textColor,
                  fontFamily: 'Montserrat-Regular',
                  marginLeft: 15,
                  marginRight: 15,
                  fontSize: 16,
                  lineHeight: 28,
                },
              ]}>
              Head to budget manger to select categories and allocate amounts.
            </Text>
          ) : (
            <FlatList
              ListHeaderComponent={
                <>
                  <View
                    style={[
                      styles.messagecon,
                      {
                        display: closeMessage ? 'none' : 'flex',
                        backgroundColor: colors.themeColor,
                        borderColor: colors.textColor,
                      },
                    ]}>
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

                    {moment().endOf('month').diff(moment(), 'days') !== 0 ? (
                      <Text
                        style={[
                          BasicStyles.header,
                          {color: colors.textColor, margin: 20, marginTop: 5},
                        ]}>
                        Your Budget for the next{' '}
                        <Text style={{color: colors.componentTxtColor}}>
                          {moment().endOf('month').diff(moment(), 'days')} days
                        </Text>{' '}
                        is{' '}
                        <Text style={{color: colors.componentTxtColor}}>
                          ₦
                          {Math.round(
                            (getBudget(data) - getSpent(data)) /
                              moment().endOf('month').diff(moment(), 'days'),
                          )}{' '}
                          per day.
                        </Text>{' '}
                        Spend Wisely.
                        {Math.round(
                          (getBudget(data) - getSpent(data)) /
                            moment().endOf('month').diff(moment(), 'days'),
                        ) < 500 && '🤣🤣🤣💔🔥'}
                      </Text>
                    ) : (
                      <Text
                        style={[
                          BasicStyles.header,
                          {color: colors.textColor, margin: 20, marginTop: 5},
                        ]}>
                        <Text style={{color: colors.componentTxtColor}}>
                          Last day
                        </Text>{' '}
                        of the month! 🥳🎉🎊
                      </Text>
                    )}
                  </View>
                  <View
                    style={[
                      BasicStyles.spaceBtw,
                      {
                        marginLeft: 15,
                        marginRight: 15,

                        marginBottom: 15,
                      },
                    ]}>
                    <Text
                      style={[
                        BasicStyles.subheader,
                        {color: colors.themeColor},
                      ]}>
                      OverView
                    </Text>
                    <TouchableOpacity
                      onPress={() => setShowCategoriesodal(true)}
                      activeOpacity={0.5}>
                      <Text
                        style={[
                          BasicStyles.subheader,
                          {color: colors.textColor},
                        ]}>
                        View all
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              }
              showsVerticalScrollIndicator={false}
              style={{paddingTop: 15}}
              data={data
                .sort((a: categories, b: categories) => b.spent - a.spent)
                .slice(0, 3)}
              renderItem={data => <HomeBlocks props={data.item} />}
            />
          )}
          <Modal
            animated
            animationType="slide"
            visible={add}
            transparent
            onRequestClose={() => setAdd(false)}>
            {<Add setAdd={setAdd} />}
          </Modal>
          <Modal
            animated
            animationType="slide"
            visible={showCategoriesodal}
            transparent
            onRequestClose={() => setShowCategoriesodal(false)}>
            {<Categories setShowCategoriesodal={setShowCategoriesodal} />}
          </Modal>
          <Modal
            animated
            animationType="slide"
            visible={budgetModal}
            transparent
            onRequestClose={() => setBudgetModal(false)}>
            {<Budget setBudgetModal={setBudgetModal} />}
          </Modal>
        </SafeAreaView>
      </Drawer>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  headerCon: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  messagecon: {
    maxWidth: 400,
    margin: 15,
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    /* shadowColor: '#1D1D1F',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 16, */
    borderWidth: 2,
    borderBottomWidth: 4,
  },
});
