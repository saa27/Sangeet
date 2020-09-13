import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import SongItem from '../components/SongItem';

const FavouritesScreen = (props) => {
  const favSongs = useSelector((state) => state.songs.favSongs);

  if (favSongs.length === 0) {
    return (
      <View style={styles.screen}>
        <Text style={styles.fav}>Your Favourites</Text>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={styles.noFav}>No favourites added!</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.fav}>Your Favourites</Text>
      <ScrollView style={{marginTop: 20}}>
        <View>
          {favSongs.map((item) => (
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
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    backgroundColor: 'black',
  },
  fav: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  noFav: {
    color: '#a6a6a6',
  },
});

export default FavouritesScreen;
