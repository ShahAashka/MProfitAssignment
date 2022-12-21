import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const icon = require('../../assets/more-horizontal.png');

const IntroTitle = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textParentView}>
        <Text style={styles.headerTitile}>My Spending</Text>
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Image source={icon} resizeMode={'contain'} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    paddingTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    marginBottom: 28,
    height: 24,
    width: 24,
    tintColor: '#818181',
  },
  textParentView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  headerTitile: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    textAlignVertical: 'center',
  },
});

export default IntroTitle;
