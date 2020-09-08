import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SONGS, GENRES} from '../components/data';
import SongItem from '../components/SongItem';

const SongsListScreen = (props) => {
  const gid = props.navigation.getParam('gid');

  const displayedGenre = GENRES.find((genre) => genre.id === gid); //getting the genre passed as param

  const displayedSongs = SONGS.filter((song) => song.genreId.indexOf(gid) >= 0); //filter out the songs of the same genre

  const renderSongItem = ({item, index}) => {
    return (
      <SongItem
        poster={item.poster}
        title={item.title}
        artist={item.artist}
        onSelect={() =>
          props.navigation.navigate('SongsPlay', {songId: item.id})
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <Ionicons
        name="arrow-back"
        size={25}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.genreImage}>
          <Image
            source={{uri: displayedGenre.imageUrl}}
            style={{height: 250, width: 250}}
          />
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
  },
  genreImage: {
    paddingHorizontal: 70,
    paddingTop: 70,
    paddingBottom: 40,
  },
  genreTitle: {
    paddingTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    padding: 10,
  },
});

export default SongsListScreen;
