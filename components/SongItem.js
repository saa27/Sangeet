import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../components/Colors';

let TouchableCmp = TouchableOpacity;

if (Platform.OS === 'android' && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback; //diff for both ios and android
}

const SongItem = (props) => {
  return (
    <View style={styles.songItem}>
      <View style={styles.songAndIcon}>
        <TouchableCmp onPress={props.onSelect}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: props.artwork}} style={styles.songImg} />
            <View style={styles.titleAndartist}>
              <Text style={styles.songTitle}>{props.title}</Text>
              <Text style={styles.songArtist}>{props.artist}</Text>
            </View>
          </View>
        </TouchableCmp>
        <TouchableCmp onPress={props.onLike}>
          <Ionicons name={props.icon} size={28} color={Colors.primary} />
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  songItem: {
    height: 60,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    justifyContent: 'center',
  },
  songTitle: {
    fontSize: 18,
    color: 'white',
  },
  songAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  songImg: {
    height: 40,
    width: 40,
  },
  titleAndartist: {
    paddingLeft: 10,
  },
  songArtist: {
    fontSize: 12,
    color: 'gray',
  },
});

export default SongItem;
