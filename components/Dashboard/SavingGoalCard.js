import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const moneyIcon = require('../../assets/moneyBag.png');

const SavingGoalCard = ({navigation}) => {

    const handlePress = () => {
        navigation.navigate("Intro");
    }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.mainContainer}>
      <View style={styles.leftTextContainer}>
        <Text style={styles.savingText}>Create a Saving goal</Text>
        <Text style={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipisci
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          source={moneyIcon}
          style={styles.iconStyles}
          resizeMode={'contain'}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    marginHorizontal: 24,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: 'rgba(74, 85, 104, 0.07)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation: 5,
  },
  leftTextContainer: {
    flex: 3,
    marginVertical: 20,
  },
  savingText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#030303',
    marginBottom: 2,
  },
  loremText: {
    flexWrap: 'wrap',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20,
    color: '#818181',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyles: {
    height: 50,
    width: 50,
  },
});

export default SavingGoalCard;
