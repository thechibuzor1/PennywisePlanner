/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  BasicStyles,
  Categories,
  colors,
  getBudget,
  overViewData,
} from '../contants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import CircularProgress from 'react-native-circular-progress-indicator';
import BudgetCategories from './BudgetCategories';
import AddCategory from './AddCategory';
import moment from 'moment';
import DeleteAllData from './DeleteAllData';
import {getSpent, MyCategories} from '../contants';
import Allocate from './Allocate';

export default function Budget({setBudgetModal, data, setData}) {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [add, setAdd] = useState<boolean>(false);
  const [allocate, setAllocate] = useState<boolean>(false);
  const [deleteAllData, setDeleteAllData] = useState<boolean>(false);

  function deleteCategory() {
    const clonedData = [...data];
    clonedData.forEach(ele => {
      if (ele.name === selectedCategory?.name) {
        let index = clonedData.indexOf(ele);
        clonedData.splice(index, 1);
      }
    });
    setData(clonedData);
    setDeleteAllData(false);
    setSelectedCategory({});
  }

  /* var ld = Date.today().clearTime().moveToLastDayOfMonth();
var lastday = ld.toString("MM/dd/yyyy");
alert(lastday); */
  return (
    <View style={BasicStyles.modalBgCon}>
      <Modal
        animated
        animationType="slide"
        visible={add}
        transparent
        onRequestClose={() => setAdd(false)}>
        {<AddCategory setData={setData} data={data} setAdd={setAdd} />}
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={allocate}
        transparent
        onRequestClose={() => setAllocate(false)}>
        {
          <Allocate
            alloData={selectedCategory}
            setAlloData={setSelectedCategory}
            setAllocate={setAllocate}
            setData={setData}
            data={data}
            setAdd={setAdd}
          />
        }
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={deleteAllData}
        transparent
        onRequestClose={() => setDeleteAllData(false)}>
        {
          <DeleteAllData
            function={deleteCategory}
            setDeleteAll={setDeleteAllData}
          />
        }
      </Modal>
      <SafeAreaView
        style={[BasicStyles.container, {backgroundColor: colors.background}]}>
        <View style={{marginTop: 30, paddingBottom: 15, marginLeft: 15}}>
          <Text
            style={[
              BasicStyles.header,
              {
                color: colors.textColor,
                fontFamily: 'Montserrat-Regular',
                fontSize: 44,
                lineHeight: 54,
              },
            ]}>
            Budget
          </Text>
          <Text
            style={[
              BasicStyles.header,
              {
                marginTop: 5,
                color: colors.textColor,
                fontSize: 44,
                lineHeight: 54,
              },
            ]}>
            HQ
          </Text>
          <TouchableOpacity
            onPress={() => setBudgetModal(false)}
            activeOpacity={0.5}
            style={[
              BasicStyles.backBtn,
              {right: 15, borderColor: colors.textColor},
            ]}>
            <FontAwesomeIcon
              icon={solid('xmark')}
              size={22}
              color={colors.textColor}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={{margin: 16}} showsVerticalScrollIndicator={false}>
          <View
            style={[
              {
                alignItems: 'center',
              },
              BasicStyles.spaceBtw,
            ]}>
            <Text
              style={[
                BasicStyles.header,
                {
                  fontSize: 27,
                  lineHeight: 32,
                  color: colors.textColor,
                },
              ]}>
              Current budget
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setDeleteAllData(true)}>
              <FontAwesomeIcon
                icon={regular('trash-can')}
                size={30}
                color={colors.themeColor}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              BasicStyles.header,
              {
                marginTop: 15,
                fontSize: 21,
                lineHeight: 24,
                marginBottom: 5,
                color: colors.textColor,
              },
            ]}>
            ₦{getBudget(data)}/month
          </Text>
          <View
            style={[
              {
                maxWidth: 400,
                padding: 16,
                alignItems: 'center',
                marginTop: 15,
                borderWidth: 2,
                borderBottomWidth: 4,

                borderRadius: 16,
              },
              BasicStyles.spaceBtw,
            ]}>
            <View style={{flex: 1}}>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontSize: 17,
                    lineHeight: 24,
                    marginBottom: 5,
                    color: colors.textColor,
                  },
                ]}>
                This month's available
              </Text>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontSize: 17,
                    lineHeight: 24,
                    marginBottom: 5,
                    color: colors.textColor,
                  },
                ]}>
                Balance:
                <Text style={{fontFamily: 'Montserrat-Regular'}}>
                  {' '}
                  ₦{getBudget(data) - getSpent(data)}/₦{getBudget(data)}
                </Text>
              </Text>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontSize: 17,
                    lineHeight: 24,
                    marginBottom: 5,
                    color: colors.textColor,
                  },
                ]}>
                Days remaining before
              </Text>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontSize: 17,
                    lineHeight: 24,
                    marginBottom: 5,
                    color: colors.textColor,
                  },
                ]}>
                reset:
                <Text style={{fontFamily: 'Montserrat-Regular'}}>
                  {' '}
                  {moment().endOf('month').diff(moment(), 'days')}{' '}
                </Text>
              </Text>
            </View>

            <CircularProgress
              value={(getSpent(data) / getBudget(data)) * 100}
              valueSuffix={'%'}
              inActiveStrokeColor={'black'}
              progressValueColor={colors.themeColor}
              maxValue={100}
              radius={45}
              clockwise={false}
              activeStrokeColor={colors.themeColor}
            />
          </View>

          <View
            style={[
              {
                alignItems: 'center',
                marginTop: 30,
              },
              BasicStyles.spaceBtw,
            ]}>
            <Text
              style={[
                BasicStyles.header,
                {
                  fontSize: 27,
                  lineHeight: 32,
                  color: colors.textColor,
                },
              ]}>
              Categories
            </Text>
            <TouchableOpacity
              onPress={() => setAdd(true)}
              activeOpacity={0.5}
              style={{display: add ? 'none' : 'flex'}}>
              <FontAwesomeIcon
                icon={solid('plus')}
                size={30}
                color={colors.themeColor}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.moneyGrid}>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={dat => (
                <BudgetCategories
                  setDeleteAllData={setDeleteAllData}
                  props={dat.item}
                  data={data}
                  setData={setData}
                  setAllocate={setAllocate}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
              )}
              keyExtractor={item => item.name}
            />
          </View>

          {/*   {edit && (
            <>
              <Text
                style={[
                  BasicStyles.header,
                  {
                    fontFamily: 'Montserrat-Regular',

                    fontSize: 27,
                    lineHeight: 32,
                    color: colors.textColor,
                  },
                ]}>
                Edit Categories
              </Text>
              <View style={styles.moneyGrid}>
                <FlatList
                  data={Categories}
                  numColumns={2}
                  renderItem={data => <AddCategory props={data.item} />}
                  keyExtractor={item => item.name}
                />
              </View>
              <View
                style={[
                  {
                    maxWidth: 400,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  },
                ]}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    borderWidth: 2,
                    borderRadius: 30,
                    margin: 10,
                    backgroundColor: colors.themeColor,
                  }}>
                  <FontAwesomeIcon
                    icon={solid('check')}
                    size={35}
                    style={{margin: 7}}
                    color={colors.textColor}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setEdit(false)}
                  style={{borderWidth: 2, borderRadius: 30, margin: 10}}>
                  <FontAwesomeIcon
                    icon={solid('xmark')}
                    size={35}
                    style={{margin: 7}}
                    color={colors.textColor}
                  />
                </TouchableOpacity>
              </View>
            </>
          )} */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
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
