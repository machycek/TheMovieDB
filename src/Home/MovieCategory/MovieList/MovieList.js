// @flow
import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import Movie from './Movie/Movie'

const styles = StyleSheet.create({
  movieList: {
    // height: 1,
    // backgroundColor: 'black',
    flexGrow: 1,
    flexDirection: 'row',
    paddingLeft: 14,
  },
});


type MovieType = {
  title: string,
  rating: number,
  image: string,
}

type Props = {
  movieList: Array<MovieType>,
}

export default class Category extends Component {
  props: Props;

  render() {
    const { movieList, genres, pushScene } = this.props
    // console.info(genres)
    // genres: Object.keys(genres).length !== 0 ? movie.genre_ids.map(genre => genres[genre]).slice(0, 3).join(' / ') : ''

    return (
      <ScrollView horizontal style={styles.movieList} showsHorizontalScrollIndicator={false}>
        {
          movieList.map(movie => (
            <Movie
              pushScene={pushScene}
              key={movie.title}
              movie={{
                ...movie,
                genres: Object.keys(genres).length !== 0 ? movie.genre_ids.map(genre => genres[genre]).slice(0, 3).join(' / ') : '',
              }}
            />
          ))
        }
      </ScrollView>
    );
  }
}
