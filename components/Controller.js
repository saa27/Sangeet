import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import TrackPlayer from 'react-native-track-player';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Controller = (props) => {

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={props.goPrev}>
        <AntDesign name="stepbackward" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Fontisto name="pause" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.goNext}>
        <AntDesign name="stepforward" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Controller;
