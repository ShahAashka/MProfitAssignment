import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Budget from './Budget';

const Intro = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Two</Text>
      <Budget />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F4F7F7',
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Intro;
