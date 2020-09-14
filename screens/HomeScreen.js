import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {GENRES, SONGS} from '../components/data';
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
    <View style={{backgroundColor: 'black', padding: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.header}>Namaste!</Text>
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
          <Text style={styles.recommText}>English Tracks</Text>
          <FlatList
            horizontal
            data={SONGS}
            renderItem={renderSongItem}
            showsHorizontalScrollIndicator={false}
          />
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
    paddingBottom: 20,
    paddingTop: 15,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: height / 41,
    color: 'gray',
    paddingBottom: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
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
    marginBottom: 15,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
