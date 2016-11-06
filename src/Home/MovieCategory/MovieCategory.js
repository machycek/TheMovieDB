// @flow
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

import MovieList from './MovieList/MovieList'

const styles = StyleSheet.create({
  category: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 0,
    // flexDirection: 'column',
    // marginLeft: 5,
    // paddingRight: 15,
    marginBottom: 34,
    height: Dimensions.get('window').height * 0.6,
  },
  title: {
    color: '#ADAEB3',
    fontSize: 14,
    // borderWidth: 2,
    // borderBottom: 'orange',
    // borderBottomColor: 'blue',
    // flex: 1,
    // flexGrow: 0,
    // flexShrink: 0,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#2E2F33',
    // flexGrow: 1,
    marginBottom: 24,
    width: Dimensions.get('window').width - 28,
  },
  header: {
    marginLeft: 14,
  }
});

export default class MovieCategory extends Component {

  props: Category & {
    pushScene: Function,
  };

  render() {
    const { movies, title, genres = [], pushScene } = this.props

    return (
      <View style={styles.category}>
        <View style={styles.header}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>
          <View style={styles.divider}></View>
        </View>
        <MovieList movieList={movies} pushScene={pushScene} genres={genres} />
      </View>
    );
  }
}
