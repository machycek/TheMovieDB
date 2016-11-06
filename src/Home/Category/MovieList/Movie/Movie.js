
// @flow
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Vibration,
} from 'react-native';

import Stars from './Stars/Stars'

const styles = StyleSheet.create({
  movie: {
    backgroundColor: '#222326',
    marginRight: 7,
    flexGrow: 1,
    flexShrink: 0,
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').height * 0.45,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'stretch',
  },
  title: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 8,
  },
  image: {
    width: Dimensions.get('window').width * 0.45,
    height: 80,
    flex: 1,
    flexGrow: 1,
  },
  meta: {
    height: Dimensions.get('window').height * 0.15,
    padding: 9,
    justifyContent: 'space-between',
  },
  genre: {
    color: '#ADAEB3',
    fontWeight: '600',
    fontSize: 10,
  },
});

type Props = {
  poster_path: string,
  adult: boolean,
  overview: string,
  release_date: string,
  title: string,
  vote_average: number,
}

export default class Movie extends Component {
  props: Props;


  render() {
    const { movie, pushScene } = this.props

    const {
      title, poster_path, vote_average, genres,
    } = movie

    const rating = Math.round(vote_average * 10)

    return (
      <TouchableOpacity style={styles.movie} onPress={() => pushScene({ title: 'MovieProfile', passProps: { movie } }) }>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }} style={styles.image} />
        <View style={styles.meta}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.genre}>{genres}</Text>
          </View>
          <Stars rating={rating} />
        </View>
      </TouchableOpacity>
    );
  }
}
