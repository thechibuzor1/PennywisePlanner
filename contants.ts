/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';

let bgColor = '#464646';

let colors = {
  background: '#fcf4e7',
  textColor: '#1D1D1F',
  themeColor: '#1947E5',
  componentTxtColor: '#F5F5F7',
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
  moneyGrid: {
    alignSelf: 'center',
    marginTop: 15,
    marginHorizontal: 'auto',
    maxWidth: 400,
    flexDirection: 'row',
    margin: 15,
    flexWrap: 'wrap',
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
  tag: string;
  spent: number;
  budget: number;
}

export const overViewData: overview[] = [
  {
    name: 'Grocery',
    left: '15000',
    spent: '24000',
    budget: '40000',
    backgroundColor: '#F95A2C',
    icon: solid('basket-shopping'),
  },
  {
    name: 'Shopping',
    left: '2750',
    spent: '9250',
    budget: '12000',
    backgroundColor: '#44D7A8',
    icon: solid('cart-shopping'),
  },
  {
    name: 'Travel',
    left: '80000',
    spent: '120000',
    budget: '200000',
    backgroundColor: '#FFBD12',
    icon: solid('plane-departure'),
  },
  {
    name: 'Food',
    left: '25750',
    spent: '9250',
    budget: '35000',
    backgroundColor: '#1947E5',
    icon: solid('utensils'),
  },
  {
    name: 'Other',
    left: '2500',
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
    tag: 'daily',
    spent: 0,
    budget: 0,
  },
  {
    name: 'Shopping',
    backgroundColor: '#44D7A8',
    icon: solid('cart-shopping'),
    tag: 'daily',
    spent: 0,
    budget: 0,
  },
  {
    name: 'Travel',
    backgroundColor: '#FFBD12',
    icon: solid('plane-departure'),
    tag: 'monthly',
    spent: 0,
    budget: 0,
  },
  {
    name: 'Food',
    backgroundColor: '#1947E5',
    icon: solid('utensils'),
    tag: 'daily',
    spent: 0,
    budget: 0,
  },
  /*  */
  {
    name: 'Gym',
    backgroundColor: '#89cbc0',
    icon: solid('dumbbell'),
    tag: 'monthly',
    spent: 0,
    budget: 0,
  },
  {
    name: 'Home',
    backgroundColor: '#b7b6db',
    icon: solid('house'),
    tag: 'monthly',
    spent: 0,
    budget: 0,
  },
  {
    name: 'Car',
    backgroundColor: '#eedc69',
    icon: solid('car'),
    tag: 'monthly',
    spent: 0,
    budget: 0,
  },

  {
    name: 'Health',
    backgroundColor: '#1947E5',
    icon: regular('hospital'),
    tag: 'monthly',
    spent: 0,
    budget: 0,
  },

  /*  */
  {
    name: 'Other',
    backgroundColor: '#474A57',
    icon: solid('ellipsis'),
    tag: 'daily',
    spent: 0,
    budget: 0,
  },
  {
    name: 'Other',
    backgroundColor: '#474A57',
    icon: solid('ellipsis'),
    tag: 'monthly',
    spent: 0,
    budget: 0,
  },
];

export const MyCategories: categories[] = [
  {
    name: 'Grocery',
    backgroundColor: '#F95A2C',
    icon: solid('basket-shopping'),
    tag: 'daily',
    spent: 500,
    budget: 5000,
  },
  {
    name: 'Shopping',
    backgroundColor: '#44D7A8',
    icon: solid('cart-shopping'),
    tag: 'daily',
    spent: 3000,
    budget: 10000,
  },
  {
    name: 'Travel',
    backgroundColor: '#FFBD12',
    icon: solid('plane-departure'),
    tag: 'monthly',
    spent: 30000,
    budget: 100000,
  },
  {
    name: 'Other',
    backgroundColor: '#474A57',
    icon: solid('ellipsis'),
    tag: 'daily',
    spent: 0,
    budget: 500,
  },
];

export function getBudget() {
  let res: number = 0;
  MyCategories.forEach(element => {
    res += element.budget;
  });
  return res;
}
export function getSpent() {
  let res: number = 0;
  MyCategories.forEach(element => {
    res += element.spent;
  });
  return res;
}
