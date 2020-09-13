import React from 'react';
import {View, Text} from 'react-native';
import SongsNavigator from './navigation/SongsNavigator';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import songsReducer from './store/reducers/songsReducers';

const rootReducer = combineReducers({
  songs: songsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <SongsNavigator />
    </Provider>
  );
}
