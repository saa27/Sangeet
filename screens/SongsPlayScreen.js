import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TrackPlayer from 'react-native-track-player';

import {SONGS} from '../components/data';
import Controller from '../components/Controller';

const {width, height} = Dimensions.get('window');

const SongsPlayScreen = (props) => {
  const sId = props.navigation.getParam('sid');
  const gId = props.navigation.getParam('gid');

  const displayedSongs = SONGS.filter((song) => song.genre.indexOf(gId) >= 0);

  const scrollX = useRef(new Animated.Value(0)).current; //to prevent from re rendering
  const [songIndex, setSongIndex] = useState(sId);
  const slider = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      const index = Math.round(value / width);
      setSongIndex(index);
    });

    TrackPlayer.setupPlayer().then(async () => {
      console.log('Player ready');
      await TrackPlayer.add(displayedSongs);
      setIsPlayerReady(true);
      TrackPlayer.play();
    });
  }, []);

  useEffect(() => {
    if (isPlayerReady) {
      TrackPlayer.skip(displayedSongs[songIndex].id);
    }
  }, [songIndex]);

  const goNext = () => {
    slider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };

  const goPrevious = () => {
    slider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderSongItem = ({item, index}) => {
    return (
      <View style={styles.imgContainer}>
        <Image source={{uri: item.artwork}} style={{height: 320, width: 320}} />
        {/* <Text>{item.title}</Text> */}
      </View>
    );
  };

  return (
    <View>
      <SafeAreaView>
        <View style={styles.icon}>
          <Ionicons
            name="arrow-back"
            size={25}
            onPress={() => props.navigation.goBack()}
          />
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={displayedSongs}
          renderItem={renderSongItem}
          keyExtractor={(item) => item.id}
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          initialScrollIndex={parseInt(sId)} //to start from a specific song in the specific genre
          ref={slider}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
        />
      </SafeAreaView>
      <View style={styles.songinfoCont}>
        <Text style={styles.title}>{displayedSongs[songIndex].title}</Text>
        <Text style={styles.artist}>{displayedSongs[songIndex].artist}</Text>
      </View>
      <Controller goNext={goNext} goPrev={goPrevious} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
  imgContainer: {
    width: width,
    alignItems: 'center',
  },
  songinfoCont: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
  },
  artist: {
    fontSize: 18,
    color: 'gray',
  },
});

export default SongsPlayScreen;
