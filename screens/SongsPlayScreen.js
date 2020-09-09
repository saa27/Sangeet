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

import {SONGS} from '../components/data';

const {width, height} = Dimensions.get('window');

const SongsPlayScreen = (props) => {
  const sId = props.navigation.getParam('sid');
  const gId = props.navigation.getParam('gid');

  const displayedSongs = SONGS.filter((song) => song.genreId.indexOf(gId) >= 0);

  const scrollX = useRef(new Animated.Value(0)).current; //to prevent from re rendering
  const [songIndex, setSongIndex] = useState(sId);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      const index = Math.round(value / width);
      setSongIndex(index);
    });
  }, []);

  const renderSongItem = ({item, index}) => {
    return (
      <View style={styles.imgContainer}>
        <Image source={{uri: item.poster}} style={{height: 320, width: 320}} />
        {/* <Text>{item.title}</Text> */}
      </View>
    );
  };

  return (
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
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
      />
      <View style={styles.songinfoCont}>
        <Text style={styles.title}>{displayedSongs[songIndex].title}</Text>
        <Text style={styles.artist}>{displayedSongs[songIndex].artist}</Text>
      </View>
    </SafeAreaView>
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
