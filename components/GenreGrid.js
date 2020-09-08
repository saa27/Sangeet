import React from 'react';
import {StyleSheet, ImageBackground, Text, View} from 'react-native';

const GenreGrid = (props) => {
  return (
    <View style={styles.grid}>
      <ImageBackground
        source={{uri: props.imageUrl}}
        style={{height: '100%', width: '100%'}}>
        <View style={{...styles.container, ...props.image}}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 5,
    height: 100,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 15,
    textAlign: 'right',
  },
});

export default GenreGrid;
