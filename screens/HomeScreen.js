import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import Colors from '../components/Colors';
import {GENRES, SONGS, SONGS2} from '../components/data';
import GenreGrid from '../components/GenreGrid';
import Recomm from '../components/Recomm';

const {width, height} = Dimensions.get('window');

const HomeScreen = (props) => {
  const renderGenreItem = ({item, index}) => {
    return (
      <GenreGrid
        imageUrl={item.imageUrl}
        title={item.title}
        onSelect={() => {
          props.navigation.navigate('SongsList', {gid: item.id}); //passing the id of genre as params to view its songs in the next screen
        }}
      />
    );
  };

  const renderSongItem = ({item, index}) => {
    return (
      <Recomm
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
    );
  };

  return (
    <View style={{backgroundColor: 'rgba(0,0,0, 0.8)', padding: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.header}>Hey There!</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Search');
            }}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeader}>Choose your favourite genre!</Text>

        <View style={styles.listOfGenres}>
          <FlatList
            keyExtractor={(item, index) => item.id}
            key={GENRES} //new thing, Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.
            data={GENRES}
            renderItem={renderGenreItem}
            numColumns={2}
          />
        </View>
        <View style={styles.recomm}>
          <Text style={styles.recommText}>Recommended for you</Text>
          <FlatList horizontal data={SONGS} renderItem={renderSongItem} showsHorizontalScrollIndicator={false} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    padding: 20,
  },
  header: {
    color: 'white',
    fontSize: height / 25,
    paddingBottom: 15,
  },
  subHeader: {
    fontSize: height / 41,
    color: 'gray',
    paddingBottom: 10,
  },
  listOfGenres: {
    flex: 1,
    marginBottom: 20,
  },

  recomm: {
    padding: 10,
    height: 280,
  },
  recommText: {
    color: 'gray',
    fontSize: height / 41,
    marginBottom: 10,
  },
});

export default HomeScreen;
