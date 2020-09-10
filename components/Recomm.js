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
      <TouchableCmp>
        <View style={styles.card}>
          <Image
            source={{uri: props.artwork}}
            style={{height: 25, width: '100%', flex: 1}}
          />
          <View style={styles.infoContainer}>
            <Text>{props.title}</Text>
            <Text>{props.artist}</Text>
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
  card: {
    borderRadius: 10,
    height: 180,
    width: 150,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginRight: 20,
  },
  infoContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Recomm;
