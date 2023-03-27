/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import MenuDrawer from 'react-native-side-drawer';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {BasicStyles} from '../contants';

const Drawer = props => {
  const width = Dimensions.get('window').width;
  const overlay = true;
  const position = 'left';

  const drawerContent = () => {
    const edges = ['bottom', 'top', 'left'];
    const baseStyle = {
      flex: 1,
      display: 'flex',

      backgroundColor: '#000000',
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: 'black',
    };

    return (
      <SafeAreaView edges={edges} style={baseStyle}>
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            flex: 1,
            padding: 20,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              alignSelf: 'flex-end',
              marginTop: 20,
              marginBottom: 20,
            }}
            onPress={props.toggleDrawer}>
            <FontAwesomeIcon
              icon={solid('xmark')}
              size={32}
              color={'#000000'}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingTop: 20,
            }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{marginTop: 20, marginBottom: 20}}>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontSize: 44,
                    lineHeight: 54,
                  },
                ]}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{marginTop: 20, marginBottom: 20}}>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontSize: 44,
                    lineHeight: 54,
                  },
                ]}>
                Statistics
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{marginTop: 20, marginBottom: 20}}>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontSize: 44,
                    lineHeight: 54,
                  },
                ]}>
                Settings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{marginTop: 20, marginBottom: 20}}>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontSize: 44,
                    lineHeight: 54,
                  },
                ]}>
                Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <MenuDrawer
      open={props.open}
      drawerContent={drawerContent()}
      position={position}
      drawerPercentage={100}
      animationTime={100}
      overlay={overlay}
      opacity={1}>
      {props.children}
    </MenuDrawer>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
  },
  text: {
    paddingTop: 20,
  },
  textLink: {
    paddingTop: 20,
    color: 'blue',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Drawer;
