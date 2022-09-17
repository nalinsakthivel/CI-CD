import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions, StatusBar} from 'react-native';
import ReanimatedCurveTabBar from 'react-native-curved-bottom-tabbar';
const {height, width} = Dimensions.get('window');
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const ARRAY_LENGTH = 4;

const Screens = [...Array(ARRAY_LENGTH)].map((item, index) => props => (
  <View
    style={{
      width,
      height,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text>{index + 1 + ''}</Text>
  </View>
));

export default class NavBar extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBar={props => (
          <ReanimatedCurveTabBar
            {...props}
            btnWidth={0}
            tabColor={'#423b27'}
            sidesRadius={0}
            backgroundColor={'#ffff'}
            reactNaviagtionBar={true}
            height={175}
            lockTranslateYAnime={true}
            iconsArray={[...Array(ARRAY_LENGTH)].map((item, index) => (
              <View style={{alignItems: 'center', backgroundColor: '#fffff'}}>
                <View style={styles.icon}>
                  <Text>{index + 1}</Text>
                </View>
                <Text>Hello</Text>
              </View>
            ))}
            allowDropAnime={true}
          />
        )}>
        <Tab.Screen name={'1'} component={Screens[0]} />
        <Tab.Screen name={'2'} component={Screens[1]} />
        <Tab.Screen name={'3'} component={Screens[2]} />
        <Tab.Screen name={'4'} component={Screens[3]} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    height: 40,
    width: 40,
    borderRadius: 3,
  },
});
