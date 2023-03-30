/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {BasicStyles, colors} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Divider} from 'react-native-elements';

export default function Account({setAccountModal}) {
  const [displayName, setDisplayName] = useState('Chibuzor');
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <View style={BasicStyles.modalBgCon}>
      <View
        style={{
          backgroundColor: colors.background,
          borderWidth: 2,
          padding: 16,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          maxWidth: 400,
          alignSelf: 'center',
          flex: 0.3,
          paddingBottom: 0,
          borderColor: colors.textColor,
        }}>
        <View
          style={{
            alignSelf: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          {edit ? (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  padding: 16,
                  backgroundColor: '#000000',
                  borderRadius: 16,
                  borderColor: colors.textColor,
                  borderWidth: 2,
                  marginRight: 15,
                }}>
                <Text
                  style={{
                    color: '#ffffff',

                    fontFamily: 'Montserrat-Bold',
                  }}>
                  Save Changes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setEdit(false)}
                style={{
                  padding: 16,
                  backgroundColor: colors.background,
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: colors.textColor,
                }}>
                <Text
                  style={{
                    color: colors.textColor,
                    fontFamily: 'Montserrat-Bold',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setEdit(true)}>
                <FontAwesomeIcon
                  icon={regular('pen-to-square')}
                  size={24}
                  style={{marginRight: 15}}
                  color={colors.textColor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setAccountModal(false)}
                activeOpacity={0.5}>
                <FontAwesomeIcon
                  icon={solid('xmark')}
                  style={{}}
                  size={25}
                  color={colors.textColor}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            alignItems: 'center',
            borderBottomWidth: 2,
            borderColor: colors.textColor,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon
              icon={solid('user')}
              size={22}
              style={{marginRight: 5}}
              color={colors.textColor}
            />
            <Text
              style={[
                BasicStyles.header,
                {
                  color: colors.textColor,
                  marginTop: 5,
                  fontSize: 24,
                  lineHeight: 28,
                  width: '80%',
                },
              ]}>
              {displayName}
            </Text>
          </View>
        </View>

        <View style={{paddingTop: 16}}>
          <View style={styles.listContainer}>
            <Text
              style={[
                BasicStyles.header,
                {color: colors.textColor, fontSize: 17, lineHeight: 24},
              ]}>
              Display Name:{' '}
            </Text>
            {edit ? (
              <TextInput
                autoFocus
                style={styles.textField}
                value={displayName}
                onChangeText={text => setDisplayName(text)}
              />
            ) : (
              <Text
                style={[
                  BasicStyles.header,
                  {
                    color: colors.textColor,
                    fontSize: 17,
                    lineHeight: 24,
                    fontFamily: 'Montserrat-Regular',
                  },
                ]}>
                {displayName}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoTxt: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  infoTxtR: {fontFamily: 'Montserrat-Regular', fontSize: 18, color: 'gray'},
  textField: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    flex: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    paddingStart: 16,
    paddingEnd: 16,
    marginLeft: 5,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});
