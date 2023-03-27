/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const BasicStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    fontSize: 36,
    fontFamily: 'Montserrat-ExtraBold',
    color: 'black',
    lineHeight: 40,
  },
  subheader: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    color: '#9FA4B4',
    lineHeight:20
  },
  spaceBtw: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
