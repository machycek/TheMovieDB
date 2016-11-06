// @flow
import React, { Component } from 'react'

import {
  View,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {

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
      <View>
        <Text>{movie.title}</Text>

      </View>
    )
  }
}
