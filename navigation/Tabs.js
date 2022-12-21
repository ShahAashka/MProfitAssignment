import * as React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Home from '../components/Dashboard/Home';
import Intro from '../components/IntoPage/Intro';
// import TabThree from '../components/TabThree';
import TabFour from '../components/TabFour';
import TabFive from '../components/TabFive';
import DashboardTitle from '../components/Dashboard/DashboardTitile';
import TabThree from '../components/TabThree';

// const Tab = createBottomTabNavigator();

const USER = require('../assets/userIcon.png');
const HOME = require('../assets/homeIcon.png');
const WALLET = require('../assets/walletIcon.png');
const CALENDER = require('../assets/calIcon.png');
const PLUS = require('../assets/plus.png');

const _renderIcon = routeName => {
  let icon = '';

  switch (routeName) {
    case 'Home':
      icon = HOME;
      break;
    case 'Home3':
      icon = CALENDER;
      break;
    case 'Home4':
      icon = WALLET;
      break;
    case 'Home5':
      icon = USER;
      break;
  }

  return (
    <Image source={icon} resizeMode={'contain'} style={styles.iconStyle} />
  );
};

const renderTabBar = ({routeName, navigate}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={styles.tabBarStyle}>
      {_renderIcon(routeName)}
    </TouchableOpacity>
  );
};

// const CustomTabBarButton = ({children, onPress}) => (
//   <TouchableOpacity onPress={onPress} style={styles.customIcon}>
//     <View style={styles.customView}>{children}</View>
//   </TouchableOpacity>
// );

const BottomTabs = () => {
  return (
    // <Tab.Navigator
    //   screenOptions={{
    //     tabBarShowLabel: false,
    //     tabBarStyle: {
    //       position: 'absolute',
    //       bottom: 0,
    //       left: 0,
    //       right: 0,
    //       backgroundColor: '#F4F7F7',
    //       height: 84,
    //     },
    //   }}>
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarIcon: ({focused}) => (
    //         <Image
    //           source={require('../assets/homeIcon.png')}
    //           resizeMode={'contain'}
    //           style={styles.iconStyle}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Intro"
    //     component={Intro}
    //     options={{
    //       tabBarIcon: ({focused}) => (
    //         <Image
    //           source={require('../assets/calIcon.png')}
    //           resizeMode={'contain'}
    //           style={styles.iconStyle}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Home3"
    //     component={TabThree}
    //     options={{
    //       tabBarIcon: ({focused}) => (
    //         <Image
    //           source={require('../assets/plus.png')}
    //           resizeMode={'contain'}
    //           style={styles.iconStyle}
    //         />
    //       ),
    //       tabBarButton: props => <CustomTabBarButton {...props} />,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Home4"
    //     component={TabFour}
    //     options={{
    //       tabBarIcon: ({focused}) => (
    //         <Image
    //           source={require('../assets/walletIcon.png')}
    //           resizeMode={'contain'}
    //           style={styles.iconStyle}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Home5"
    //     component={TabFive}
    //     options={{
    //       tabBarIcon: ({focused}) => (
    //         <Image
    //           source={require('../assets/userIcon.png')}
    //           resizeMode={'contain'}
    //           style={styles.iconStyle}
    //         />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
    <CurvedBottomBar.Navigator
      type="DOWN"
      height={78}
      circleWidth={50}
      bgColor="#ffffff"
      initialRouteName="Home"
      borderTopLeftRight={false}
      renderCircle={() => (
        <Animated.View style={styles.btnCircle}>
          <TouchableOpacity style={styles.tabBarStyle} onPress={() => {}}>
            <Image
              source={PLUS}
              resizeMode={'contain'}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="Home"
        position="LEFT"
        component={Home}
        options={{
          headerTitle: () => <DashboardTitle />,
          headerStyle: {backgroundColor: '#F4F7F7'},
        }}
      />
      <CurvedBottomBar.Screen
        name="Home3"
        position="LEFT"
        component={TabThree}
        options={{headerShown: false}}
      />
      <CurvedBottomBar.Screen
        name="Home4"
        component={TabFour}
        position="RIGHT"
        options={{headerShown: false}}
      />
      <CurvedBottomBar.Screen
        name="Home5"
        component={TabFive}
        position="RIGHT"
        options={{headerShown: false}}
      />
    </CurvedBottomBar.Navigator>
  );
};

const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Stack.Navigator initialRouteName="Stack">
      <Stack.Screen name="Stack" component={BottomTabs} options={{headerShown: false}}/>
      <Stack.Screen name="Intro" component={Intro} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    height: 24,
    width: 24,
  },
  //   customIcon: {
  //     top: -40,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   customView: {
  //     height: 58,
  //     width: 58,
  //     borderRadius: 29,
  //     backgroundColor: '#FFC727',
  //     shadowColor: '#F4F7F7',
  //     shadowOffset: {
  //       width: 0,
  //       height: 5,
  //     },
  //     shadowOpacity: 0.2,
  //     shadowRadius: 2.5,
  //     elevation: 3,
  //   },
  tabBarStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  btnCircle: {
    width: 58,
    height: 58,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC727',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 2,
    bottom: 23,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default Tabs;
