/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {BasicStyles, colors, textColor} from '../contants';
import ThemeModal from '../components/ThemeModal';

export default function Settings({navigation}) {
  const [showThemeModal, setShowThemeModal] = useState<boolean>(false);
  return (
    <SafeAreaView
      style={[BasicStyles.container, {backgroundColor: colors.background}]}>
      <Modal
        animated
        animationType="slide"
        visible={showThemeModal}
        transparent
        onRequestClose={() => setShowThemeModal(false)}>
        {<ThemeModal setShowThemeModal={setShowThemeModal} />}
      </Modal>
      <View style={{marginTop: 30, paddingBottom: 15}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.5}
          style={BasicStyles.backBtn}>
          <FontAwesomeIcon
            icon={solid('chevron-left')}
            size={22}
            color={textColor}
          />
        </TouchableOpacity>
        <Text
          style={[
            BasicStyles.header,
            {
              marginTop: 10,
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 27,
              lineHeight: 32,
            },
          ]}>
          Settings
        </Text>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text style={[BasicStyles.subheader, styles.graySubHeader]}>
          General
        </Text>
        <View style={styles.sectionCon}>
          <TouchableOpacity
            onPress={() => setShowThemeModal(true)}
            activeOpacity={0.5}
            style={[
              BasicStyles.spaceBtw,
              {alignItems: 'center', marginTop: 5},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 15,
              }}>
              <FontAwesomeIcon
                icon={solid('circle')}
                size={20}
                color={'#44D7A8'}
              />
              <Text
                style={[
                  BasicStyles.header,
                  {
                    marginLeft: 10,
                    fontSize: 17,
                    lineHeight: 24,
                  },
                ]}>
                Theme
              </Text>
            </View>

            <FontAwesomeIcon
              icon={solid('chevron-right')}
              size={20}
              color={textColor}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              BasicStyles.spaceBtw,
              {alignItems: 'center', marginTop: 5},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 15,
              }}>
              <FontAwesomeIcon
                icon={solid('circle')}
                size={20}
                color={'#44D7A8'}
              />
              <Text
                style={[
                  BasicStyles.header,
                  {
                    marginLeft: 10,
                    fontSize: 17,
                    lineHeight: 24,
                  },
                ]}>
                Color
              </Text>
            </View>

            <FontAwesomeIcon
              icon={solid('chevron-right')}
              size={20}
              color={textColor}
            />
          </TouchableOpacity>
        </View>

        <Text style={[BasicStyles.subheader, styles.graySubHeader]}>
          Your Data
        </Text>
        <View style={styles.sectionCon}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              BasicStyles.spaceBtw,
              {alignItems: 'center', marginTop: 5},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 15,
              }}>
              <FontAwesomeIcon
                icon={solid('circle')}
                size={20}
                color={'#44D7A8'}
              />
              <Text
                style={[
                  BasicStyles.header,
                  {
                    marginLeft: 10,
                    fontSize: 17,
                    lineHeight: 24,
                  },
                ]}>
                Account
              </Text>
            </View>

            <FontAwesomeIcon
              icon={solid('chevron-right')}
              size={20}
              color={textColor}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              BasicStyles.spaceBtw,
              {alignItems: 'center', marginTop: 5},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 15,
              }}>
              <FontAwesomeIcon
                icon={solid('circle')}
                size={20}
                color={'#FF9692'}
              />
              <Text
                style={[
                  BasicStyles.header,
                  {
                    marginLeft: 10,
                    fontSize: 17,
                    lineHeight: 24,
                  },
                ]}>
                Delete all Data
              </Text>
            </View>

            <FontAwesomeIcon
              icon={solid('chevron-right')}
              size={20}
              color={textColor}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  graySubHeader: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 21,
    lineHeight: 28,
  },
  sectionCon: {
    padding: 18,
    borderWidth: 2,
    margin: 15,
    borderRadius: 16,
    borderBottomWidth: 4,
    borderColor: textColor,
  },
});
