/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';

let bgColor = '#464646';

let colors = {
  background: '#fcf4e7',
  textColor: '#000000',
  themeColor: '#44D7A8',
  componentTxtColor: '#ffffff',
  subTextColor: '#1947E5',
};

function setBg(value: string) {
  bgColor = value;
}
export {bgColor, setBg, colors};

/* '#fcf4e7' -- offwhite
  #7388b8 -- blue
  #ea400e -- red
  #046574 -- darkBlue
  #5eab6e -- green
  #e09c2c -- orange
  #ec9aa2 -- pink
#c4aaf5 -- purple
#464646 -- dark
*/

export const BasicStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 36,
    fontFamily: 'Montserrat-ExtraBold',
    lineHeight: 40,
  },
  subheader: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    lineHeight: 20,
  },
  spaceBtw: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBtns: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  statBtnText: {
    fontSize: 17,
    lineHeight: 24,

    margin: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  statBtnCon: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 16,
  },
  backBtn: {
    position: 'absolute',
    marginLeft: 15,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 30,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBgCon: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  plusIcon: {
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

interface overview {
  name: string;
  left: string;
  spent: string;
  budget: string;
  backgroundColor: string;
  icon: any;
}

export interface categories {
  name: string;
  backgroundColor: string;
  icon: any;
}

export const overViewData: overview[] = [
  {
    name: 'Grocery',
    left: '150',
    spent: '240',
    budget: '400',
    backgroundColor: '#F95A2C',
    icon: solid('basket-shopping'),
  },
  {
    name: 'Shopping',
    left: '275',
    spent: '925',
    budget: '1200',
    backgroundColor: '#44D7A8',
    icon: solid('cart-shopping'),
  },
  {
    name: 'Travel',
    left: '1880',
    spent: '120',
    budget: '2000',
    backgroundColor: '#FFBD12',
    icon: solid('plane-departure'),
  },
  {
    name: 'Food',
    left: '2579',
    spent: '921',
    budget: '3500',
    backgroundColor: '#1947E5',
    icon: solid('utensils'),
  },
  {
    name: 'Other',
    left: '4579',
    spent: '1000',
    budget: '3500',
    backgroundColor: '#474A57',
    icon: solid('ellipsis'),
  },
];

export const Categories: categories[] = [
  {
    name: 'Grocery',
    backgroundColor: '#F95A2C',
    icon: solid('basket-shopping'),
  },
  {
    name: 'Shopping',
    backgroundColor: '#44D7A8',
    icon: solid('cart-shopping'),
  },
  {
    name: 'Travel',
    backgroundColor: '#FFBD12',
    icon: solid('plane-departure'),
  },
  {
    name: 'Food',
    backgroundColor: '#1947E5',
    icon: solid('utensils'),
  },
  /*  */
  {
    name: 'Gym',
    backgroundColor: '#89cbc0',
    icon: solid('dumbbell'),
  },
  {
    name: 'Home',
    backgroundColor: '#b7b6db',
    icon: solid('house'),
  },
  {
    name: 'Car',
    backgroundColor: '#eedc69',
    icon: solid('car'),
  },

  {
    name: 'Health',
    backgroundColor: '#1947E5',
    icon: regular('hospital'),
  },

  /*  */
  {
    name: 'Other',
    backgroundColor: '#474A57',
    icon: solid('ellipsis'),
  },
];
