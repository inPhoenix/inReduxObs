import React, { Component } from 'react'
import {connect} from 'react-redux'
import { cancelSearch, fetchAction } from '../../actions'
import { SearchField } from '../SearchField/SearchField'
import MovieItem from '../MovieItem/MovieItem'


export class Stories extends Component {
  state = {
    term: '',
    error: false
  }

  handleError = () => {
    this.setState({
      error: true
    })
  }

  movieDetails = () => {
    const { movie } = this.props
    if(!this.props.movie) return null;
    const prefixPosterPath = 'https://image.tmdb.org/t/p/w500/'
    return (
      <div>
        <p>
        {movie.overview}
        </p>
        <div>
          <img src={prefixPosterPath + movie.poster_path} height='500' width='400'/>
        </div>

      </div>
    )

  }

  storyList = () => {
    if(this.props.current && this.props.current.results === 0) return null;
    const prefixPosterPath = 'https://image.tmdb.org/t/p/w500/'
    if(this.props.loading) {
      return (<p>Loading</p>)
    }
    return (
      <div>
        {this.props.current && this.props.current.results.map((item) =>
          {
            const posterPathId = item.backdrop_path
            const posterPath = prefixPosterPath + posterPathId
            return (
              <div>
                <MovieItem
                  key={item.id}
                  movieId={item.id}
                  posterPath={posterPath}
                  title={item.title}
                />
              </div>
            )}
        )}
      </div>
    )
  }
  handleSearch = (event) => {
    this.props.loadMovies(event)
    this.setState({
      term: event
    })
  }

  getImage () {
    const prefixPosterPath = 'https://image.tmdb.org/t/p/w500/'
    const posterPathId = this.props.video.poster_path
    const posterPath = prefixPosterPath + posterPathId

    if (this.state.error) {
      return
    }
    return <img className='image-thumbnail' src={posterPath} onError={() => this.handleError()} />
  }

  render () {
    return (
      <div >
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <div>
            <SearchField
              defaultValue={''}
              messages={this.props.messages}
              onChange={this.handleSearch}
              loading={this.props.loading}
              cancel={this.props.cancelSearch}
              // autoFocus
            />
          </div>
          <div id='button-bar'>
            <button
              type='button'
              onClick={() => this.props.loadMovies('star wars')}
            >
              Movie Suggestion
            </button>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <div>
            {this.storyList()}
          </div>
          <div>
            {this.movieDetails()}
          </div>
        </div>
      </div>
    )
  }
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    loadMovies: (movie) => dispatch(fetchAction(movie)),
    cancelSearch: () => dispatch(cancelSearch())
  }
}
export default connect(mapState, mapDispatch)(Stories)
