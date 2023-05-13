/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import * as Progress from 'react-native-progress';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Add from '../components/Add';
import Budget from '../components/Budget';
import Categories from '../components/Categories';
import Drawer from '../components/Drawer';
import HomeBlocks from '../components/HomeBlocks';
import {
  BasicStyles,
  MyCategories,
  categories,
  colors,
  getBudget,
  getSpent,
} from '../contants';

export default function Home({navigation}) {
  /* const isDarkMode = useColorScheme() === 'dark'; */
  const width = Dimensions.get('window').width;
  const [openDrawer, setDrawerOpen] = useState<boolean>(false);
  const [closeMessage, setCloseMessage] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(false);
  const [showCategoriesodal, setShowCategoriesodal] = useState<boolean>(false);
  const [budgetModal, setBudgetModal] = useState<boolean>(false);

  const [data, setData] = useState<categories[]>(MyCategories);

  const toggleDrawer = () => {
    setDrawerOpen(!openDrawer);
  };

  return (
    <SafeAreaProvider>
      <Drawer
        data={data}
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

          <View
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 30,
              marginBottom: 5,
            }}>
            <View style={BasicStyles.spaceBtw}>
              <TouchableOpacity
                onPress={toggleDrawer}
                activeOpacity={0.5}
                style={{
                  marginBottom: 5,
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
                  marginBottom: 5,
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
                  fontSize: 36,
                  lineHeight: 40,
                },
              ]}>
              Hello,
            </Text>
            <Text style={[BasicStyles.header, {color: colors.textColor}]}>
              Chibuzor
            </Text>
            <Text style={[BasicStyles.subheader, {color: colors.themeColor}]}>
              Current Balance
            </Text>
            <Text
              style={[
                BasicStyles.header,
                {color: colors.textColor, fontSize: 40, marginTop: 5},
              ]}>
              ₦{getBudget(data) - getSpent(data)}
            </Text>

            <Progress.Bar
              progress={getSpent(data) / getBudget(data)}
              height={3}
              color={colors.themeColor}
              unfilledColor={'white'}
              width={width - 30}
              style={{marginTop: 30}}
            />

            <View style={BasicStyles.spaceBtw}>
              <Text style={[BasicStyles.subheader, {color: colors.themeColor}]}>
                Spent:{' '}
                <Text
                  style={[BasicStyles.subheader, {color: colors.textColor}]}>
                  ₦{getSpent(data)}
                </Text>
              </Text>
              <Text style={[BasicStyles.subheader, {color: colors.themeColor}]}>
                Budget:{' '}
                <Text
                  style={[BasicStyles.subheader, {color: colors.textColor}]}>
                  ₦{getBudget(data)}
                </Text>
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setAdd(true)}
            activeOpacity={0.5}
            style={[
              BasicStyles.plusIcon,
              {
                display: add ? 'none' : 'flex',
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
                  <Text
                    style={[
                      BasicStyles.header,
                      {color: colors.textColor, margin: 20, marginTop: 5},
                    ]}>
                    Your Budget for the next{' '}
                    <Text style={{color: colors.componentTxtColor}}>
                      1 day(s)
                    </Text>{' '}
                    is{' '}
                    <Text style={{color: colors.componentTxtColor}}>
                      ₦{Math.round((getBudget(data) - getSpent(data)) / 1)} per
                      day.
                    </Text>{' '}
                    Spend Wisely.
                  </Text>
                </View>
                <View
                  style={[
                    BasicStyles.spaceBtw,
                    {
                      marginLeft: 15,
                      marginRight: 15,
                      marginTop: 30,
                      marginBottom: 15,
                    },
                  ]}>
                  <Text
                    style={[BasicStyles.subheader, {color: colors.themeColor}]}>
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
            data={data.slice(0, 2)}
            renderItem={data => <HomeBlocks props={data.item} />}
          />
          <Modal
            animated
            animationType="slide"
            visible={add}
            transparent
            onRequestClose={() => setAdd(false)}>
            {<Add data={data} setData={setData} setAdd={setAdd} />}
          </Modal>
          <Modal
            animated
            animationType="slide"
            visible={showCategoriesodal}
            transparent
            onRequestClose={() => setShowCategoriesodal(false)}>
            {
              <Categories
                data={data}
                setShowCategoriesodal={setShowCategoriesodal}
              />
            }
          </Modal>
          <Modal
            animated
            animationType="slide"
            visible={budgetModal}
            transparent
            onRequestClose={() => setBudgetModal(false)}>
            {
              <Budget
                data={data}
                setData={setData}
                setBudgetModal={setBudgetModal}
              />
            }
          </Modal>
        </SafeAreaView>
      </Drawer>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  messagecon: {
    maxWidth: 400,
    margin: 15,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 30,
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
