export const extractUniqueMonthAndTotalSpend = data => {
  //if format of date is yyyy-mm-dd or dd-mm-yyyy
  let extractDates = new Map();
  data.forEach(element => {
    let date = covertNumToMonthsStr(element.Date.split('-')[1]);
    let spend = element.Spending;
    if (extractDates.has(date)) {
      extractDates.set(date, extractDates.get(date) + spend);
    } else {
      extractDates.set(date, spend);
    }
  });
  return extractDates;
};

export const covertNumToMonthsStr = monthsInNum => {
  switch (monthsInNum) {
    case '01':
      return 'Jan';
    case '02':
      return 'Feb';
    case '03':
      return 'Mar';
    case '04':
      return 'Apr';
    case '05':
      return 'May';
    case '06':
      return 'Jun';
    case '07':
      return 'Jul';
    case '08':
      return 'Aug';
    case '09':
      return 'Sep';
    case '10':
      return 'Oct';
    case '11':
      return 'Nov';
    case '12':
      return 'Dec';
  }
};
