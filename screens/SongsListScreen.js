import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
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

const {width, height} = Dimensions.get('window');

const SongsListScreen = (props) => {
  const gid = props.navigation.getParam('gid');//getting the genre passed as param

  const displayedGenre = GENRES.find((genre) => genre.id === gid); //finding the genre by the id whose songs are going to be displayed

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

  const displayedSongs = arr.filter((song) => song.genre.indexOf(gid) >= 0); //filter out the songs of the same genre,
  // not needed though coz arr also contains the songs of the required genre

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
        size={height/30}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.genreContainer}>
          <View style={styles.genreImage}>
            <Image
              source={{uri: displayedGenre.imageUrl}}
              style={{height: height/2.8, width: height/2.8}}
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
    padding: height/75,
    backgroundColor: 'black',
  },
  genreContainer: {
    paddingHorizontal: height/10.7,
    paddingTop: height/20,
    paddingBottom: height/18.7,
  },
  genreImage: {
    borderRadius: height/5,
    overflow: 'hidden',
  },

  genreTitle: {
    paddingTop: height/75,
    fontSize: height/25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  listContainer: {
    padding: height/75,
  },
});

export default SongsListScreen;
