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
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, overViewData} from '../contants';
import * as Progress from 'react-native-progress';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Drawer from '../components/Drawer';

export default function Home({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const width = Dimensions.get('window').width;
  const [openDrawer, setDrawerOpen] = useState<boolean>(false);
  const [closeMessage, setCloseMessage] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen(!openDrawer);
  };

  const Blocks = ({props}) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        marginLeft: 15,
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
        }}>
        <FontAwesomeIcon
          icon={solid('cart-shopping')}
          size={30}
          color={'#000000'}
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
              {fontSize: 17, lineHeight: 24, color: '#9FA4B4'},
            ]}>
            Left: <Text style={{color: '#000000'}}>${props.left}</Text>
          </Text>
        </View>
        <Progress.Bar
          progress={Number(props.spent) / Number(props.budget)}
          height={3}
          color={'#44D7A8'}
          unfilledColor={'white'}
          width={width - 100}
          style={{marginTop: 10}}
        />
        <View style={BasicStyles.spaceBtw}>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 17, lineHeight: 24, color: '#9FA4B4'},
            ]}>
            Spent: <Text style={{color: '#000000'}}>${props.spent}</Text>
          </Text>
          <Text
            style={[
              BasicStyles.header,
              {fontSize: 17, lineHeight: 24, color: '#9FA4B4'},
            ]}>
            Budget: <Text style={{color: '#000000'}}>${props.budget}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <Drawer navigation={ navigation } open={openDrawer} toggleDrawer={toggleDrawer}>
        <SafeAreaView style={BasicStyles.container}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={isDarkMode ? '#000000' : '#ffffff'}
          />

          <View
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 30,
            }}>
            <TouchableOpacity
              onPress={toggleDrawer}
              activeOpacity={0.5}
              style={{
                marginBottom: 20,
              }}>
              <FontAwesomeIcon
                icon={solid('bars')}
                size={30}
                color={'#000000'}
              />
            </TouchableOpacity>
            <Text
              style={[
                BasicStyles.header,
                {
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 36,
                  lineHeight: 40,
                },
              ]}>
              Hello,
            </Text>
            <Text style={BasicStyles.header}>Chibuzor</Text>
            <Text style={BasicStyles.subheader}>Current Balance</Text>
            <Text style={[BasicStyles.header, {fontSize: 40, marginTop: 5}]}>
              $20,000
            </Text>

            <Progress.Bar
              progress={20000 / 33000}
              height={3}
              color={'#44D7A8'}
              unfilledColor={'white'}
              width={width - 30}
              style={{marginTop: 30}}
            />

            <View style={BasicStyles.spaceBtw}>
              <Text style={BasicStyles.subheader}>
                Spent:{' '}
                <Text style={[BasicStyles.subheader, {color: '#000000'}]}>
                  $13,000
                </Text>
              </Text>
              <Text style={BasicStyles.subheader}>
                Budget:{' '}
                <Text style={[BasicStyles.subheader, {color: '#000000'}]}>
                  $33,000
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              display: closeMessage ? 'none' : 'flex',
              backgroundColor: '#44D7A8',
              width: 350,
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
                color={'#000000'}
              />
            </TouchableOpacity>
            <Text
              style={[
                BasicStyles.header,
                {color: '#000000', margin: 20, marginTop: 5},
              ]}>
              Your Budget for the next{' '}
              <Text style={{color: '#ffffff'}}>6 days</Text> is{' '}
              <Text style={{color: '#ffffff'}}>$260 per day.</Text> Spend
              Wisely.
            </Text>
          </View>
          <View
            style={[
              BasicStyles.spaceBtw,
              {
                marginLeft: 15,
                marginRight: 15,
                marginTop: 30,
                marginBottom: 20,
              },
            ]}>
            <Text style={BasicStyles.subheader}>OverView</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={[BasicStyles.subheader, {color: '#000000'}]}>
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            style={{paddingTop: 15}}
            data={overViewData}
            renderItem={data => <Blocks props={data.item} />}
          />
        </SafeAreaView>
      </Drawer>
    </SafeAreaProvider>
  );
}
