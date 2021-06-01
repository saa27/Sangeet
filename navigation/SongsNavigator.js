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
import SearchScreen from '../screens/SearchScreen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../components/Colors';

const AllSongsNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SongsList: SongsListScreen,
    SongsPlay: SongsPlayScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
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
      headerShown: false,
    },
  },
);

const Searchnavigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const tabScreenConfig = {
  All: {
    screen: AllSongsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="home" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: '#282828',
      tabBarLabel: Platform.OS === 'android' ? <Text>Home</Text> : 'Home',
    },
  },
  SearchIcon: {
    screen: Searchnavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="search" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: '#282828',
      tabBarLabel: Platform.OS === 'android' ? <Text>Search</Text> : 'Search',
    },
  },
  Favourites: {
    screen: FavSongsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="heart" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: '#282828',
      tabBarLabel:
        Platform.OS === 'android' ? <Text>Favourites</Text> : 'Favourites',
    },
  },
};

const SongsNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        //for android like effect
        activeColor: Colors.primary,
        inactiveColor: '#a6a6a6',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        //for ios like effect
        tabBarOptions: {
          inactiveBackgroundColor: Colors.accent,
          activeBackgroundColor: Colors.primary,
          activeTintColor: Colors.primary,
          inactiveTintColor: 'rgba( 10, 10, 10, 0.6)', //temporary colors
          tabStyle: {
            borderColor: '#a6a6a6',
            borderWidth: 1,
          },
          /* labelStyle: {
            fontFamily: 'open-sans',
          }, */
        },
      });

export default createAppContainer(SongsNavigator);
