import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';

import TrackPlayer, {useProgress} from 'react-native-track-player';

import Colors from '../components/Colors';

const {width, height} = Dimensions.get('window');

const MySlider = (props) => {
  const {position, duration} = useProgress(); //destructuring to get the position and duration

  const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);//returns 2 for 2.4
    let seconds = Math.ceil(secs - minutes * 60);//returns 2 for 1.4

    if (seconds < 10) seconds = `0${seconds}`; //to get the format 0: "05"

    return `${minutes}:${seconds}`; //using back ticks to dynamically inject the time
  };

  const changeSlider = (val) => {
    console.log(val);
    TrackPlayer.seekTo(val);//seeks to a specified time position in secs
  };

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slider
          style={{width: height/2.35, height: height/25}}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          minimumTrackTintColor={Colors.primary}
          thumbTintColor={Colors.primary}
          maximumTrackTintColor="gray"
          onSlidingComplete={changeSlider}
        />
      </View>
      <View style={styles.timing}>
        <Text style={styles.timeText}>{formatTime(position)}</Text>
        <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height/10.71,
  },
  slider: {
    alignItems: 'center',
  },
  timing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: height/12.5,
  },
  timeText: {
    color: Colors.primary,
    fontSize: height/62.5,
  },
});

export default MySlider;
