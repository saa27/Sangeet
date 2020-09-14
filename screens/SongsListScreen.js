import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {toggleFavourite} from '../store/actions/songsActions';

import {
  CLASSICS,
  DANCE,
  GENRES,
  ROCKON,
  ROM,
  SOOTHING,
  WORKOUT,
} from '../components/data';
import SongItem from '../components/SongItem';
import Colors from '../components/Colors';

const SongsListScreen = (props) => {
  const gid = props.navigation.getParam('gid');

  const displayedGenre = GENRES.find((genre) => genre.id === gid); //getting the genre passed as param

  let arr = [{}];
  if (gid === '1') {
    arr = ROM;
  } else if (gid === '2') {
    arr = SOOTHING;
  } else if (gid === '3') {
    arr = ROCKON;
  } else if (gid === '4') {
    arr = CLASSICS;
  } else if (gid === '5') {
    arr = WORKOUT;
  } else if (gid === '6') {
    arr = DANCE;
  }

  const displayedSongs = arr.filter((song) => song.genre.indexOf(gid) >= 0); //filter out the songs of the same genre

  const renderSongItem = ({item, index}) => {
    return (
      <SongItem
        artwork={item.artwork}
        title={item.title}
        artist={item.artist}
        onSelect={() =>
          props.navigation.navigate('SongsPlay', {
            sid: item.id,
            gid: item.genre,
          })
        }
        onLike={() => {}}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <Ionicons
        name="arrow-back"
        color={Colors.primary}
        size={25}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.genreContainer}>
          <View style={styles.genreImage}>
            <Image
              source={{uri: displayedGenre.imageUrl}}
              style={{height: 250, width: 250}}
            />
          </View>
          <Text style={styles.genreTitle}>{displayedGenre.title}</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList data={displayedSongs} renderItem={renderSongItem} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  genreContainer: {
    paddingHorizontal: 70,
    paddingTop: 70,
    paddingBottom: 40,
  },
  genreImage: {
    borderRadius: 150,
    overflow: 'hidden',
  },

  genreTitle: {
    paddingTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  listContainer: {
    padding: 10,
  },
});

export default SongsListScreen;
