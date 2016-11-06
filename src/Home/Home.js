// @flow
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Category from './Category/Category'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    backgroundColor: '#121314',
  },
});

export default class Home extends Component {
  constructor(props) {
    super(props)

    this._pushScene = this._pushScene.bind(this)
  }

  _pushScene(data) {
    this.props.navigator.push(data)
  }

  render() {
    return (
      <View style={styles.container}>
        <Category
          title="Popular"
          pushScene={this._pushScene}
        />
      </View>
    )
  }
}
