import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';

import {GENRES, SONGS, SONGS2} from '../components/data';

import SongItem from '../components/SongItem';
import Colors from '../components/Colors';
import {ScrollView} from 'react-native-gesture-handler';

const SearchScreen = (props) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const arrayHolder = [...SONGS, ...SONGS2];

  const searchFilterFunction = (text) => {
    const newData = arrayHolder.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSearch(text);
    setData(newData);
  };

  return (
    <View style={{flex: 1, padding: 40}}>
      <SearchBar
        round={true}
        lightTheme
        containerStyle={{backgroundColor: 'white'}}
        inputContainerStyle={{backgroundColor: 'white'}}
        placeholderTextColor={Colors.primary}
        placeholder="Search for songs..."
        value={search}
        underlineColorAndroid={Colors.primary}
        onChangeText={(text) => {
          searchFilterFunction(text);
        }}
        onClear={() => searchFilterFunction('')}
      />

      <ScrollView>
        <View>
          {data.map((item) => (
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

export default SearchScreen;
