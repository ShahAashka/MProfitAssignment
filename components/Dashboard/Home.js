import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import BudgetComponent from './BugdetComponent';
import CardComponent from './CardComponent';
import IncExpSection from './IncExpSection';
import SavingGoalCard from './SavingGoalCard';

const Home = ({navigation}) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getDashboardData = async () => {
  //     const result = await fetch(
  //       'https://dashboard-mobile.free.beeceptor.com/stats',
  //     );
  //     const output = await result.json();
  //     setData(output);
  //     setIsLoading(false);
  //   };
  //   getDashboardData();
  // }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* {data && !isLoading && ( */}
        <>
          <CardComponent balance={'5400'} />
          <BudgetComponent budget={'2453'} />
          <SavingGoalCard navigation={navigation} />
          <IncExpSection income={'1700'} expense={'1500'} />
        </>
      {/* // )} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F4F7F7',
    flex: 1,
  },
});

export default Home;
