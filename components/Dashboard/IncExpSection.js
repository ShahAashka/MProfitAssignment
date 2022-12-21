import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const income = require('../../assets/homeIncome.png');
const expense = require('../../assets/walletExp.png');
const IncExpSection = props => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>Cash</Text>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={[
            styles.incomeContainer,
            {backgroundColor: '#D9E7E5', marginRight: 16},
          ]}>
          <View
            style={[styles.bankIconContainer, {backgroundColor: '#42887C'}]}>
            <Image source={income} resizeMode={'contain'} style={styles.icon} />
          </View>
          <Text style={styles.numberText}>{'$' + props.income}</Text>
          <Text style={styles.tagText}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.incomeContainer, {backgroundColor: '#E6E2E6'}]}>
          <View
            style={[styles.bankIconContainer, {backgroundColor: '#836F81'}]}>
            <Image
              source={expense}
              resizeMode={'contain'}
              style={styles.icon}
            />
          </View>
          <Text style={styles.numberText}>{'$' + props.expense}</Text>
          <Text style={styles.tagText}>Expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 18,
    marginHorizontal: 24,
  },
  titleStyle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 24,
    color: '#030303',
    marginBottom: 12,
  },
  subContainer: {
    flexDirection: 'row',
  },
  incomeContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
    borderRadius: 24,
    paddingBottom: 17,
  },
  bankIconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 47,
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: '#FFFFFF',
  },
  numberText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 24,
    color: '#030303',
    marginBottom: 6,
  },
  tagText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#686868',
  },
});

export default IncExpSection;
