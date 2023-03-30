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
import {BasicStyles, bgColor, colors} from '../contants';

const Drawer = props => {
  const overlay = true;
  const position = 'left';

  const drawerContent = () => {
    const edges = ['bottom', 'top', 'left'];
    const baseStyle = {
      flex: 1,
      display: 'flex',

      backgroundColor: colors.background,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: colors.textColor,
    };

    return (
      <SafeAreaView edges={edges} style={baseStyle}>
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: colors.background,
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
              color={colors.textColor}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingTop: 20,
            }}>
            <TouchableOpacity
              onPress={props.toggleDrawer}
              activeOpacity={0.5}
              style={{marginTop: 20, marginBottom: 20}}>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    color: colors.themeColor,
                    fontSize: 44,
                    lineHeight: 54,
                  },
                ]}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Stats')}
              activeOpacity={0.5}
              style={{marginTop: 20, marginBottom: 20}}>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    color: colors.textColor,
                    fontSize: 44,
                    lineHeight: 54,
                  },
                ]}>
                Statistics
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Settings')}
              activeOpacity={0.5}
              style={{marginTop: 20, marginBottom: 20}}>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    color: colors.textColor,
                    fontSize: 44,
                    lineHeight: 54,
                  },
                ]}>
                Settings
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
      animationTime={200}
      overlay={overlay}
      opacity={1}>
      {props.children}
    </MenuDrawer>
  );
};

export default Drawer;
