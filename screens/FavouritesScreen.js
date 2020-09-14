import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

import SongItem from '../components/SongItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../components/Colors';

const {width, height} = Dimensions.get('window');

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
      <View style={styles.header}>
        <Text style={styles.fav}>Your Favourites</Text>
      </View>
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
    padding: height/37,
    flex: 1,
    backgroundColor: 'black',
  },
  fav: {
    color: 'white',
    fontSize: height/25,
    fontWeight: 'bold',
    paddingVertical: height/75,
    paddingRight: height/75
  },
  noFav: {
    color: '#a6a6a6',
  },
  header: {
    flexDirection: 'row',
    
  },
});

export default FavouritesScreen;
