import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const shoppingIcon = require('../../assets/shopping.png');
const resturantIcon = require('../../assets/resturant.png');
const transportIcon = require('../../assets/transport.png');

const dummyData = [
  {
    category: 'Shopping',
    date: '10 jan 2022',
    amount: '544',
    paymentMode: 'In Cash',
    color: 'rgba(129, 178, 202, 0.14)',
    icon: shoppingIcon,
    fillColor: '#81B2CA',
  },
  {
    category: 'Resturant',
    date: '11 jan 2022',
    amount: '54,417.80',
    paymentMode: 'Card',
    color: 'rgba(131, 111, 129, 0.14)',
    icon: resturantIcon,
    fillColor: '#836F81',
  },
  {
    category: 'Transport',
    date: '12 jan 2022',
    amount: '54.00',
    paymentMode: 'Online',
    color: 'rgba(66, 136, 124, 0.14)',
    icon: transportIcon,
    fillColor: '#42887C',
  },
];

const Budget = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.cardViewContainer}>
        <View style={[styles.iconContainer, {backgroundColor: item.color}]}>
          <Image
            source={item.icon}
            resizeMode={'contain'}
            style={[styles.icon, {tintColor: item.fillColor}]}
          />
        </View>
        <View style={styles.descriptionView}>
          <View style={styles.centreAlignView}>
            <Text style={styles.categoryText}>{item.category}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
          <View style={[styles.centreAlignView, {alignItems: 'flex-end'}]}>
            <Text style={styles.categoryText}>{`$` + item.amount}</Text>
            <Text style={styles.dateText}>{item.paymentMode}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.budgetContainer}>
        <View style={styles.budgetTextextContainer}>
          <Text style={styles.progressText}>Budget for October</Text>
          <Text style={styles.progressBudgetNumber}>{`$2478`}</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.titleStyle}>Your Budget</Text>
        <FlatList
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={item => item.category}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2C383F',
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 32,
  },
  subContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#F4F6F6',
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
  },
  titleStyle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 24,
    color: '#030303',
    marginBottom: 12,
  },
  cardViewContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 7,
    paddingLeft: 7,
    marginBottom: 16,
  },
  iconContainer: {
    height: 65,
    width: 65,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 32,
    width: 32,
  },
  descriptionView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 12,
    marginRight: 17,
  },
  categoryText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#1A202C',
    marginBottom: 6,
  },
  dateText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 24,
    color: '#1A202C',
  },
  centreAlignView: {
    justifyContent: 'center',
  },
  progressText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
    color: '#ffffff',
    textAlignVertical: 'center',
  },
  progressBudgetNumber: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 21,
    lineHeight: 26,
    color: '#ffffff',
    textAlignVertical: 'center',
  },
  progressBarContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.38)',
    height: 6,
    borderRadius: 70,
    width: '100%',
  },
  progressBar: {
    backgroundColor: '#FAB512',
    height: 6,
    borderRadius: 70,
    width: '65%',
  },
  budgetContainer: {
    marginHorizontal: 44,
    marginVertical: 34,
  },
  budgetTextextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 17,
  },
});

export default Budget;
