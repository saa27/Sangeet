import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const Recomm = (props) => {
  return (
    <View styles={styles.recommList}>
      <View style={styles.card}>
        <Image
          source={{uri: props.poster}}
          style={{height: 25, width: '100%', flex: 1}}
        />
        <View style={styles.infoContainer}>
          <Text>{props.title}</Text>
          <Text>{props.artist}</Text>
        </View>
      </View>
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
