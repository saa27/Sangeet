import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {Image} from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../components/Colors';

const {width, height} = Dimensions.get('window');

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
            <Image
              source={{uri: props.artwork}}
              style={styles.songImg}
              PlaceholderContent={
                <ActivityIndicator size="small" color="gray" />
              }
            />
            <View style={styles.titleAndartist}>
              <Text style={styles.songTitle}>{props.title}</Text>
              <Text style={styles.songArtist}>{props.artist}</Text>
            </View>
          </View>
        </TouchableCmp>
        <TouchableCmp onPress={props.onLike}>
          <Ionicons
            name={props.icon}
            size={height / 26.7}
            color={Colors.primary}
          />
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  songItem: {
    height: height / 12,
    padding: height / 75,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    justifyContent: 'center',
  },
  songTitle: {
    fontSize: height / 41.6,
    color: 'white',
  },
  songAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  songImg: {
    height: height / 18.75,
    width: height / 18.75,
  },
  titleAndartist: {
    paddingLeft: height / 75,
  },
  songArtist: {
    fontSize: height / 62,
    color: 'gray',
  },
});

export default SongItem;
