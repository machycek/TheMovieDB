// @flow
import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import * as moviesDispatches from '../MoviesDB/actions'
import theme from '../config/theme'


import MovieCategory from './MovieCategory/MovieCategory'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    backgroundColor: theme.main,
  },
});
// type _pushSceneType = (f: string) :string

export class Home extends Component {
  _pushScene: Function;

  constructor(props) {
    super(props)

    this._pushScene = this._pushScene.bind(this)
  }

  componentWillMount(){
    const { getMoviesCategory, getGenres } = this.props.actions
    getMoviesCategory({ category: 'TOP_RATED' })
    getMoviesCategory({ category: 'LATEST' })
    getMoviesCategory({ category: 'POPULAR' })
    getGenres()
  }

  _pushScene(data) {
    this.props.navigator.push(data)
  }

  render() {
    const {
      movies,
      genres,
    } = this.props.moviesDB

    const { _pushScene } = this

    // console.info(movies)

    return (
      <ScrollView style={styles.container}>
        {
          Object.keys(movies).map((category: string) => {
            const categoryMovies = movies[category]
            // console.info(categoryMovies)
            return (
              <MovieCategory
                key={category}
                title={category}
                movies={categoryMovies}
                genres={genres}
                pushScene={_pushScene}
              />
            )
          })
        }
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ moviesDB }) => ({ moviesDB })
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...moviesDispatches }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
