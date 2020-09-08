import React from 'react';
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
import {ScrollView} from 'react-native-gesture-handler';

import Colors from '../components/Colors';
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
        poster={item.poster}
        title={item.title}
        artist={item.artist}
        onSelect={() => {}}
      />
    );
  };

  return (
    <View>
      <SearchBar
        round={true}
        lightTheme
        containerStyle={{backgroundColor: 'black'}}
        inputContainerStyle={{backgroundColor: '#ccc'}}
        placeholderTextColor={Colors.primary}
        placeholder="Search for songs..."
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.welcome}>
          <Text style={styles.header}>Hey There!</Text>
          <Text style={styles.subHeader}>Choose your favourite genre!</Text>
        </View>
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
          <FlatList horizontal data={SONGS} renderItem={renderSongItem} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    padding: 10,
  },
  header: {
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
    height: 350,
  },
  recommText: {
    fontSize: height / 41,
    marginBottom: 10,
  },
});

export default HomeScreen;
