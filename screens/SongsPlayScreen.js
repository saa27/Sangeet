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
import {useDispatch, useSelector} from 'react-redux';

import TrackPlayer from 'react-native-track-player';

import {
  ROM,
  SOOTHING,
  ROCKON,
  CLASSICS,
  WORKOUT,
  DANCE,
  SONGS,
} from '../components/data';
import Controller from '../components/Controller';
import MySlider from '../components/MySlider';
import Colors from '../components/Colors';

const {width, height} = Dimensions.get('window');

const SongsPlayScreen = (props) => {
  const sId = props.navigation.getParam('sid');
  const gId = props.navigation.getParam('gid');
  let arr = [{}];
  if (gId === '1') {
    arr = ROM;
  } else if (gId === '2') {
    arr = SOOTHING;
  } else if (gId === '3') {
    arr = ROCKON;
  } else if (gId === '4') {
    arr = CLASSICS;
  } else if (gId === '5') {
    arr = WORKOUT;
  } else if (gId === '6') {
    arr = DANCE;
  } else if (gId === '7') {
    arr = SONGS;
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
      console.log(index);
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

  const currentSongIsFav = useSelector((state) =>
    state.songs.favSongs.some(
      (song) => song.id === displayedSongs[songIndex].id,
    ),
  );

  const toggleFavouriteHandler = useCallback(() => {
    console.log('liked');
    dispatch(toggleFavourite(displayedSongs[songIndex].id, gId));
  }, [dispatch, displayedSongs[songIndex].id, gId]);

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
            name={currentSongIsFav ? 'heart' : 'heart-outline'}
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
        <Text style={styles.title} numberOfLines={1}>
          {displayedSongs[songIndex].title}
        </Text>
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
    fontSize: 22,
    color: 'white',
    paddingBottom: 5,
  },
  artist: {
    fontSize: 18,
    color: 'gray',
  },
});

export default SongsPlayScreen;
