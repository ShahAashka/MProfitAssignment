import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import BudgetComponent from './BugdetComponent';
import CardComponent from './CardComponent';
import IncExpSection from './IncExpSection';
import SavingGoalCard from './SavingGoalCard';

const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDashboardData = async () => {
    const resp = await fetch(
      'https://dashboard-mobile.free.beeceptor.com/stats',
    );
    const items = await resp.json();
    setData(items);
    setLoading(false);
  };

  useEffect(() => {
    // getDashboardData();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* {!isLoading && data && ( */}
        <>
          <CardComponent balance={'5400'} />
          <BudgetComponent budget={'2453'} />
          <SavingGoalCard navigation={navigation}/>
          <IncExpSection income={'1700'} expense={'1500'} />
        </>
      {/* )} */}
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
