import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

import TrackPlayer, {useProgress} from 'react-native-track-player';

import Colors from '../components/Colors';

const MySlider = (props) => {
  const {position, duration} = useProgress(); //destructuring to get the position and duration

  const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) seconds = `0${seconds}`; //to get the format 0: "05"

    return `${minutes}:${seconds}`; //using back ticks to dynamically inject the time
  };

  const changeSlider = (val) => {
    console.log(val);
    TrackPlayer.seekTo(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slider
          style={{width: 320, height: 30}}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          minimumTrackTintColor={Colors.primary}
          thumbTintColor={Colors.primary}
          maximumTrackTintColor="#000000"
          onSlidingComplete={changeSlider}
        />
      </View>
      <View style={styles.timing}>
        <Text>{formatTime(position)}</Text>
        <Text>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  slider: {
alignItems: 'center'
  },
  timing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60
  },
});

export default MySlider;
