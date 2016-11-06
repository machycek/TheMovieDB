// @flow
import React, { Component } from 'react';

import { Provider } from 'react-redux'

import {
  AppRegistry,
  StyleSheet,
  Navigator,
} from 'react-native';

import Store from './src/index'

import Home from './src/Home/Home'
import MovieProfile from './src/MovieProfile/MovieProfile'

const styles = StyleSheet.create({
  navigator: {
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
      <Provider store={Store}>
        <Navigator
          initialRoute={{ title: 'Home' }}
          style={styles.navigator}
          renderScene={this._renderScene}
        />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('TheMovieDB', () => TheMovieDB);
