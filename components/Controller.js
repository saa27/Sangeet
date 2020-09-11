import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import TrackPlayer from 'react-native-track-player';
import {usePlaybackState} from 'react-native-track-player/lib/hooks';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Controller = (props) => {
  const playBackState = usePlaybackState(); //custom hook

  useEffect(() => {}, [playBackState]);

  const onPlayPause = () => {
    //console.log(playBackState);
    if (playBackState === 3) { //I couldn't find in the documentation about this, it should be 'playing' but on the console it printed 3 for 'playing' and 2 for 'paused'
      TrackPlayer.pause();
    } else if (playBackState === 2) {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={props.goPrev}>
        <AntDesign name="stepbackward" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause}>
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
