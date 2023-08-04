/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Stats from './screens/Stats';
import Settings from './screens/Settings';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchDataFromStorage} from './reducers/actions/dataActions';
import {useDispatch, useSelector} from 'react-redux';
import {categories, demoHistory} from './contants';
import moment from 'moment';

export default function Navigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
    animationEnabled: false,
  };
  const dispatch = useDispatch();

  async function loadTheme() {
    try {
      const jsonValue = await AsyncStorage.getItem('theme');
      if (jsonValue != null) {
        const theme = JSON.parse(jsonValue);
        dispatch({type: 'SET_THEME', payload: theme});
        console.log('THEME LOADED!');
      }
    } catch (e) {
      console.log(e);
    }
    /*  {
      background: '#ec9aa2',
      componentTxtColor: '#F5F5F7',
      subTextColor: '#1947E5',
      textColor: '#1D1D1F',
      themeColor: '#F95A2C',
    }; */
  }
  async function setDataReduxMock() {
    const currentMonthAndYear = moment().format('MMM YYYY');
    try {
      const dataJson = await AsyncStorage.getItem('data');
      const historyJson = await AsyncStorage.getItem('history');
      const userName = await AsyncStorage.getItem('userName');
      const lastSavedMonthDate = await AsyncStorage.getItem(
        'storedMonthAndYear',
      );
      if (lastSavedMonthDate === null) {
        await AsyncStorage.setItem('storedMonthAndYear', currentMonthAndYear);
      }
      if (dataJson != null) {
        const data = JSON.parse(dataJson);
        dispatch({type: 'SET_DATA', payload: data});
        /* const storedMonth = locaalStorage.getItem('storedMonthAndYear') */
        if (currentMonthAndYear !== lastSavedMonthDate) {
          const clonedData = [...data];
          clonedData.forEach(element => {
            element.spent = 0;
          });
          dispatch({type: 'SET_DATA', payload: clonedData});
          const jsonValue = JSON.stringify(clonedData);
          await AsyncStorage.setItem('data', jsonValue);
          await AsyncStorage.setItem('storedMonthAndYear', currentMonthAndYear);
          console.log('DONE!');
        } else {
          console.log('MONTH CHECKS OUT BOSS!');
        }
      }
      if (historyJson != null) {
        const history = JSON.parse(historyJson);
        dispatch({type: 'SET_HISTORY', payload: history});
      }
      if (userName != null) {
        dispatch({type: 'SET_USERNAME', payload: userName});
      }
      loadTheme();
      console.log('DISPATCH COMPLETE ON STARTUP!');
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    setDataReduxMock();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
