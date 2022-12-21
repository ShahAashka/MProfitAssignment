import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const designImg = require('../../assets/cardDesign.png');
const visaImg = require('../../assets/visa.png');

const CardComponent = props => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.balanceText}>Available balance</Text>
        <Text style={styles.amountText}>{`$` + props.balance}</Text>
        <Text style={styles.detailsText}>see details</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyles}
          source={visaImg}
          resizeMode={'contain'}
        />
        <Image
          style={styles.designImg}
          source={designImg}
          resizeMode={'contain'}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 4,
    marginHorizontal: 24,
    borderRadius: 24,
    borderWidth: 1,
    backgroundColor: '#37474F',
    paddingLeft: 20,
    flexDirection: 'row',
  },
  textContainer: {
    marginTop: 25,
    flexDirection: 'column',
    flex: 1,
  },
  balanceText: {
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 10,
  },
  amountText: {
    fontStyle: 'normal',
    fontSize: 29,
    fontWeight: '600',
    lineHeight: 34,
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 32,
  },
  detailsText: {
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'column',
    marginTop: 21,
  },
  imageStyles: {
    marginRight: 21,
    justifyContent: 'flex-end',
    height: 30,
    width: 56,
  },
  designImg: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default CardComponent;
