/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StatusBar,
  Text,
  View,
  useColorScheme,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, overViewData, colors} from '../contants';
import * as Progress from 'react-native-progress';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Drawer from '../components/Drawer';
import HomeBlocks from '../components/HomeBlocks';
import Add from '../components/Add';

export default function Home({navigation}) {
  /* const isDarkMode = useColorScheme() === 'dark'; */
  const width = Dimensions.get('window').width;
  const [openDrawer, setDrawerOpen] = useState<boolean>(false);
  const [closeMessage, setCloseMessage] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(false);
  const toggleDrawer = () => {
    setDrawerOpen(!openDrawer);
  };

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
              colors.background === '#000000'
                ? 'light-content'
                : colors.textColor === '#ffffff'
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
            <Text style={BasicStyles.subheader}>Current Balance</Text>
            <Text
              style={[
                BasicStyles.header,
                {color: colors.textColor, fontSize: 40, marginTop: 5},
              ]}>
              ₦20,000
            </Text>

            <Progress.Bar
              progress={20000 / 33000}
              height={3}
              color={colors.themeColor}
              unfilledColor={'white'}
              width={width - 30}
              style={{marginTop: 30}}
            />

            <View style={BasicStyles.spaceBtw}>
              <Text style={BasicStyles.subheader}>
                Spent:{' '}
                <Text
                  style={[BasicStyles.subheader, {color: colors.textColor}]}>
                  ₦13,000
                </Text>
              </Text>
              <Text style={BasicStyles.subheader}>
                Budget:{' '}
                <Text
                  style={[BasicStyles.subheader, {color: colors.textColor}]}>
                  ₦33,000
                </Text>
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setAdd(true)}
            activeOpacity={0.5}
            style={[
              styles.plus,
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
                      6 days
                    </Text>{' '}
                    is{' '}
                    <Text style={{color: colors.componentTxtColor}}>
                      ₦260 per day.
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
                    },
                  ]}>
                  <Text style={BasicStyles.subheader}>OverView</Text>
                  <TouchableOpacity activeOpacity={0.5}>
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
            data={overViewData}
            renderItem={data => <HomeBlocks props={data.item} />}
          />
          <Modal
            animated
            animationType="slide"
            visible={add}
            transparent
            onRequestClose={() => setAdd(false)}>
            {<Add setAdd={setAdd} />}
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
    /* shadowColor: '#000000',
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
  plus: {
    marginBottom: 20,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    zIndex: 999,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 30,
  },
});
