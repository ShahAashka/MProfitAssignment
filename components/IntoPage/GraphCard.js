import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import {extractUniqueMonthAndTotalSpend} from '../utility';

const GraphCard = () => {
  const tempData = [
    {
      Date: '2022-01-01',
      Spending: 5000,
    },
    {
      Date: '2022-01-15',
      Spending: 8000,
    },
    {
      Date: '2022-02-01',
      Spending: 7000,
    },
    {
      Date: '2022-02-15',
      Spending: 15000,
    },
    {
      Date: '2022-03-01',
      Spending: 14000,
    },
    {
      Date: '2022-03-15',
      Spending: 20000,
    },
    {
      Date: '2022-04-01',
      Spending: 24000,
    },
  ];
  const {width} = useWindowDimensions();
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);

  //   const getData = async () => {
  //     const result = await fetch(
  //       'https://dashboard-mobile.free.beeceptor.com/chart-data',
  //     );
  //     const output = await result.json();
  //     setData(output);
  //     setIsLoading(false);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  let arr = [];
  const dataObj = extractUniqueMonthAndTotalSpend(tempData);
  for (let [key, value] of dataObj) {
    arr.push({
      label: key,
      value: value,
      textShiftY: -20,
      dataPointText: value,
    });
  }

  return (
    <View style={{flex: 1, marginTop: 4, marginLeft: 24, width: '100%'}}>
      {/* {!isLoading && data && ( */}
      <LineChart
        data={arr}
        maxValue={50000}
        width={width}
        initialSpacing={24}
        hideDataPoints={false}
        curved
        noOfSections={5}
        stepValue={10000}
        xAxisColor={'#CDCDCD'}
        yAxisColor={'#ffffff'}
        thickness={2.5}
        pressEnabled={true}
        showStripOnPress={true}
        showDataPointOnPress={true}
        showTextOnPress={true}
        stripHeight={200}
        stripColor={'rgba(255, 199, 39, 0.19)'}
        stripWidth={20}
        unFocusOnPressOut={false}
        yAxisLabelTexts={['0', '10k', '20k', '30k', '40k', '50k']}
        xAxisLabelTextStyle={{
          flex: 1,
          textAlign: 'center',
          textAlignVerticle: 'top',
          marginTop: -20,
          color: '#818181',
        }}
        color="#37474F"
        dataPointsHeight={10}
        dataPointsWidth={20}
        dataPointLabelComponent={() => {
          return (
            <View
              style={{
                backgroundColor: 'black',
                height: dataPointsHeight,
                width: dataPointsWidth,
              }}
            />
          );
        }}
        customDataPoint={() => {
          return (
            <View style={styles.cutomDataPointStyle}>
              <View style={styles.dotStyle} />
            </View>
          );
        }}
        //
      />
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  cutomDataPointStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotStyle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 5,
    borderColor: '#ffffff',
    backgroundColor: '#37474F',
    marginTop: 2,
    alignSelf: 'flex-end',
    bottom: -2,
    left: 10,
  },
});

export default GraphCard;
