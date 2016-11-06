// @flow
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
  rating: {
    color: '#ADAEB3',
    fontWeight: '600',
    fontSize: 12,
  }
});

type Props = {
  rating: number,
}

export default class Stars extends Component {
  props: Props;
  constructor(props) {
    super(props)

    this.state = {
      stars: Array.from({ length: 5 }).map((v, i) => i+1),
    }
  }

  render() {
    const { rating } = this.props
    const {
      stars,
    } = this.state

    return (
      <View style={styles.stars}>
        {
          stars.map(val => (
            <Image source={require('./Star.svg')} style={{ width: 10, height: 10, opacity: rating / val >= 20 ? 1 : .5 }} key={val} />
          ))
        }
        <Text style={styles.rating}>{rating}%</Text>
      </View>
    );
  }
}
