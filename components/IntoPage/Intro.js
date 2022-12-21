import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Budget from './Budget';
import GraphCard from './GraphCard';

const Intro = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <GraphCard />
      <Budget />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Intro;
