import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SongsNavigator from './navigation/SongsNavigator';
import SplashScreen from 'react-native-splash-screen';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import songsReducer from './store/reducers/songsReducers';

const rootReducer = combineReducers({
  songs: songsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  },[])
  return (
    <Provider store={store}>
      <SongsNavigator />
    </Provider>
  );
}
