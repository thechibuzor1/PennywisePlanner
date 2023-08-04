/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {Provider, useDispatch} from 'react-redux';
import store from './store';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './screens/Home';
import Stats from './screens/Stats';
import Navigation from './navigation';
import {fetchDataFromStorage} from './reducers/actions/dataActions';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  /*  const isDarkMode = useColorScheme() === 'dark'; */

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
