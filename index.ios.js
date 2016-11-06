// @flow

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
} from 'react-native';

import Home from './src/Home/Home'
import MovieProfile from './src/MovieProfile/MovieProfile'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    backgroundColor: '#121314',
  },
});

export default class TheMovieDB extends Component {

  constructor(props) {
    super(props)

    this._renderScene = this._renderScene.bind(this)
  }


  _renderScene(route, navigator) {

    const props = {
      navigator,
      ...route.passProps
    }

    switch(route.title) {
      case 'Home':
        return <Home {...props} />

      case 'MovieProfile':
        return <MovieProfile {...props} />

      default:
        return <Home {...props} />
    }
  }

  render() {

    return (
      <Navigator
        initialRoute={{ title: 'Home' }}
        renderScene={this._renderScene}
      />
    );
  }
}


AppRegistry.registerComponent('TheMovieDB', () => TheMovieDB);
