import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

let TouchableCmp = TouchableOpacity;

if (Platform.OS === 'android' && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback;
}

const Recomm = (props) => {
  return (
    <View styles={styles.recommList}>
      <TouchableCmp onPress={props.onSelect}>
        <View style={styles.main}>
          <View style={styles.card}>
            <Image
              source={{uri: props.artwork}}
              style={{height: '100%', width: '100%', flex: 1}}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.artist}>{props.artist}</Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  recommList: {
    width: 160,
    padding: 20,
    marginLeft: 50,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 140,
    width: 150,
    overflow: 'hidden',
    marginRight: 20,
    marginBottom: 5
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  title: {
    color: 'white',
    fontSize: 18
  },
  artist: {
    color: 'gray',

  }
});

export default Recomm;
