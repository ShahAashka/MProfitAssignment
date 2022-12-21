import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const BudgetComponent = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftTextContainer}>
        <Text style={styles.budgetText}>Budget for October</Text>
        <Text style={styles.cashText}>Cash Available</Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{`$` + props.budget}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 12,
    marginHorizontal: 24,
    borderRadius: 24,
    backgroundColor: '#81B2CA',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftTextContainer: {
    marginVertical: 20,
  },
  budgetText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  cashText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 21,
    lineHeight: 26,
    color: '#FFFFFF',
  },
});

export default BudgetComponent;
