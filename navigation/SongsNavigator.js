import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Platform, Text} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import SongsListScreen from '../screens/SongsListScreen';
import SongsPlayScreen from '../screens/SongsPlayScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Colors from '../constants/Colors';

const AllSongsNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SongsList: SongsListScreen,
    SongsPlay: SongsPlayScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: true,
    },
  },
);

const FavSongsNavigator = createStackNavigator(
  {
    Fav: FavouritesScreen,
    SongsPlay: SongsPlayScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: true,
    },
  },
);

const tabScreenConfig = {
  All: {
    screen: AllSongsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialIcons name="home" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel: Platform.OS === 'android' ? <Text>Home</Text> : 'Home',
    },
  },
  Favourites: {
    screen: FavSongsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <EvilIcons name="heart" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accent,
      tabBarLabel:
        Platform.OS === 'android' ? <Text>Favourites</Text> : 'Favourites',
    },
  },
};

const SongsNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, { //for android like effect
        activeColor: 'white',
        inactiveColor: 'rgba( 10, 10, 10, 0.6)',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, { //for ios like effect
        tabBarOptions: {
          inactiveBackgroundColor: Colors.accent,
          activeBackgroundColor: Colors.primary,
          activeTintColor: 'white',
          inactiveTintColor: 'rgba( 10, 10, 10, 0.6)',//temporary colors
          tabStyle: {
            borderColor: 'black',
            borderWidth: 1,
          },
          /* labelStyle: {
            fontFamily: 'open-sans',
          }, */
        },
      });

export default createAppContainer(SongsNavigator);
