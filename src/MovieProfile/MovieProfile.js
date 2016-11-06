// @flow
import React, { Component } from 'react'

import theme from '../config/theme'

import {
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    // color: '#fff',
    width,
    height,
    backgroundColor: theme.main,
  },
  title: {
    color: '#fff',
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 20,
  }
})

type Props = {
  navigator: Object,
  movie: Object,
}

export default class  extends Component {
  props: Props;

  render() {
    const {
      movie,
    } = this.props

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{movie.title}</Text>
      </ScrollView>
    )
  }
}
