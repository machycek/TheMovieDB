// @flow
import React, { Component } from 'react';

import Star from './Stars/Star@3x.png'

console.info(Star)

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
    marginLeft: 4,
  },
});

type Props = {
  rating: number,
}

const starStyle = {
  width: 13,
  height: 13,
  marginRight: 2,
}

export default class Stars extends Component {
  props: Props;
  state: {
    stars: Array<number>,
  }

  constructor(props: Props) {
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

// , opacity: rating / val >= 20 ? 1 : .5

    return (
      <View style={styles.stars}>
        {
          stars.map(val => (
            <Image source={Star} style={{ ...starStyle, opacity: rating / val >= 20 ? 1 : .5 }} key={val} />
          ))
        }
        <Text style={styles.rating}>{rating}%</Text>
      </View>
    );
  }
}
