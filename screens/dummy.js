/* import React, {useRef, useEffect, useState, useCallback} from 'react';
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
import {toggleFavourite} from '../store/actions/songsActions';
import {useDispatch} from 'react-redux';

import TrackPlayer from 'react-native-track-player';

import {SONGS, SONGS2} from '../components/data';
import Controller from '../components/Controller';
import MySlider from '../components/MySlider';
import Colors from '../components/Colors';

const {width, height} = Dimensions.get('window');

const SongsPlayScreen = (props) => {
  const sId = props.navigation.getParam('sid');
  const gId = props.navigation.getParam('gid'); */
  /* let arr = [{}];
  if (gId === '1') {
    arr = SONGS;
  } else if (gId === '2') {
    arr = SONGS2;
  }
 */
/*   const displayedSongs = SONGS;

  const scrollX = useRef(new Animated.Value(0)).current; //to prevent from re rendering
  const [songIndex, setSongIndex] = useState(sId);
  const slider = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      const index = Math.round(value / width);
      setSongIndex(index); //set the next song in queue
    });

    TrackPlayer.setupPlayer().then(async () => {
      console.log('Player ready');
      await TrackPlayer.add(displayedSongs);
      TrackPlayer.skip(songIndex); //to start from the selected song
      setIsPlayerReady(true);
      TrackPlayer.play();
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (isPlayerReady) {
      TrackPlayer.skip(displayedSongs[songIndex].id);
    }
  }, [songIndex]); //whenever scroll value changes hence songIndex changes then the songTrack will also skip to that id

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

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    console.log('liked');
    dispatch(toggleFavourite(sId, gId));
  }, [dispatch, sId, gId]);

  const renderSongItem = ({item, index}) => {
    return (
      <View style={styles.imgContainer}>
        <Image source={{uri: item.artwork}} style={{height: 320, width: 320}} />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <SafeAreaView>
        <View style={styles.icon}>
          <Ionicons
            name="arrow-back"
            size={25}
            color={Colors.primary}
            onPress={() => props.navigation.goBack()}
          />
          <Ionicons
            name="heart"
            size={25}
            color={Colors.primary}
            onPress={toggleFavouriteHandler}
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
          initialScrollIndex={parseInt(songIndex)} //to start from a specific song in the specific genre
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
      <MySlider />
      <Controller goNext={goNext} goPrev={goPrevious} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    width: width,
    alignItems: 'center',
  },
  songinfoCont: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    color: 'white',
  },
  artist: {
    fontSize: 18,
    color: 'gray',
  },
});

export default SongsPlayScreen;

 */








/* 
import React, {useRef, useEffect, useState, useCallback} from 'react';
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
import {toggleFavourite} from '../store/actions/songsActions';
import {useDispatch} from 'react-redux';

import TrackPlayer from 'react-native-track-player';

import {SONGS, SONGS2} from '../components/data';
import Controller from '../components/Controller';
import MySlider from '../components/MySlider';
import Colors from '../components/Colors';

const {width, height} = Dimensions.get('window');

const SongsPlayScreen = (props) => {
  const sId = props.navigation.getParam('sid');
  const gId = props.navigation.getParam('gid');
  let arr = [{}];
  if (gId === '1') {
    arr = SONGS;
  } else if (gId === '2') {
    arr = SONGS2;
  }

  const displayedSongs = arr.filter((song) => song.genre.indexOf(gId) >= 0);

  const scrollX = useRef(new Animated.Value(0)).current; //to prevent from re rendering
  const [songIndex, setSongIndex] = useState(0);
  const slider = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      console.log(value);
      const index = Math.round(value / width);
      setSongIndex(index); //set the next song in queue
    });

    TrackPlayer.setupPlayer().then(async () => {
      console.log('Player ready');
      await TrackPlayer.add(displayedSongs);
      TrackPlayer.skip(sId); //to start from the selected song
      setIsPlayerReady(true);
      TrackPlayer.play();
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (isPlayerReady) {
      TrackPlayer.skip(displayedSongs[songIndex].id);
    }
  }, [songIndex]); //whenever scroll value changes hence songIndex changes then the songTrack will also skip to that id

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

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    console.log('liked');
    dispatch(toggleFavourite(sId, gId));
  }, [dispatch, sId, gId]);

  const renderSongItem = ({item, index}) => {
    return (
      <View style={styles.imgContainer}>
        <Image source={{uri: item.artwork}} style={{height: 320, width: 320}} />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <SafeAreaView>
        <View style={styles.icon}>
          <Ionicons
            name="arrow-back"
            size={25}
            color={Colors.primary}
            onPress={() => props.navigation.goBack()}
          />
          <Ionicons
            name="heart"
            size={25}
            color={Colors.primary}
            onPress={toggleFavouriteHandler}
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
      <MySlider />
      <Controller goNext={goNext} goPrev={goPrevious} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    width: width,
    alignItems: 'center',
  },
  songinfoCont: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    color: 'white',
  },
  artist: {
    fontSize: 18,
    color: 'gray',
  },
});

export default SongsPlayScreen; */

