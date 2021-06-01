import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import TrackPlayer from 'react-native-track-player';
import {usePlaybackState} from 'react-native-track-player/lib/hooks';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('window');

const Controller = (props) => {
  const playBackState = usePlaybackState(); //custom hook by the react-native-track-player package
  const [isPlaying, setIsPlaying] = useState('paused');

  useEffect(() => {
    if (playBackState === 'playing' || playBackState === 3) {
      setIsPlaying('playing');
    } else if (playBackState === 'paused' || playBackState === 2) {
      setIsPlaying('paused');
    } else {
      setIsPlaying('loading');
    }
  }, [playBackState]);

  const renderPlayPauseButton = () => {
    switch (isPlaying) {
      case 'playing':
        return <Fontisto name="pause" size={height / 25.8} color="white" />;
      case 'paused':
        return <FontAwesome5 name="play" size={height / 25.8} color="white" />;
      default:
        return <ActivityIndicator size={height / 25} color="gray" />;
    }
  };

  const onPlayPause = () => {
    //console.log(playBackState);
    if (playBackState === 'playing' || playBackState === 3) {
      //I couldn't find in the documentation about this, it should be 'playing' but on the console it printed 3 for 'playing' and 2 for 'paused'
      //apparently this is 3 only on android
      TrackPlayer.pause();
    } else if (playBackState === 'paused' || playBackState === 2) {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={props.goPrev}>
        <AntDesign name="stepbackward" size={height / 25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause}>
        {renderPlayPauseButton()}
      </TouchableOpacity>
      <TouchableOpacity onPress={props.goNext}>
        <AntDesign name="stepforward" size={height / 25} color="white" />
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
