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
import {BasicStyles, colors} from '../contants';
import ThemeModal from '../components/ThemeModal';
import ColorsModal from '../components/ColorsModal';
import SettinngsBtns from '../components/SettinngsBtns';
import DeleteAllData from '../components/DeleteAllData';
import Account from '../components/Account';

export default function Settings({navigation}) {
  const [showThemeModal, setShowThemeModal] = useState<boolean>(false);
  const [showColorsModal, setShowColorsModal] = useState<boolean>(false);
  const [deleteAllData, setDeleteAllData] = useState<boolean>(false);
  const [accountModal, setAccountModal] = useState<boolean>(false);
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
      <Modal
        animated
        animationType="slide"
        visible={showColorsModal}
        transparent
        onRequestClose={() => setShowColorsModal(false)}>
        {<ColorsModal setShowColorsModal={setShowColorsModal} />}
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={deleteAllData}
        transparent
        onRequestClose={() => setDeleteAllData(false)}>
        {<DeleteAllData setDeleteAll={setDeleteAllData} />}
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={accountModal}
        transparent
        onRequestClose={() => setAccountModal(false)}>
        {<Account setAccountModal={setAccountModal} />}
      </Modal>
      <View style={{marginTop: 30, paddingBottom: 15}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.5}
          style={[BasicStyles.backBtn, {borderColor: colors.textColor}]}>
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
        <View style={[styles.sectionCon, {borderColor: colors.textColor}]}>
          <SettinngsBtns setModal={setShowThemeModal} name={'Theme'} />

          <SettinngsBtns setModal={setShowColorsModal} name={'Colors'} />
        </View>

        <Text style={[BasicStyles.subheader, styles.graySubHeader]}>
          Your Data
        </Text>
        <View style={[styles.sectionCon, {borderColor: colors.textColor}]}>
          <SettinngsBtns setModal={setAccountModal} name={'Account'} />

          <SettinngsBtns setModal={setDeleteAllData} name={'Delete all Data'} />
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
  },
});
