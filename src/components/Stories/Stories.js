import React, { Component } from 'react'
import {connect} from 'react-redux'
import { clear,  searchMovie, searchTitles, fetchAction } from '../../actions'
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

  storyList = () => {
    console.log('%c state', 'background:black;color:red;', this.props.current && this.props.current.results)
    console.log('loading?', this.props.loading)
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
            console.log('%c item', 'background:black;color:yellow;', item)
            //if (this.state.error) {return}
            return (
              <div>
                <MovieItem
                  key={item.id}
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
    //this.props.searchTitles(event)
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
              // value={this.state.term}
              // placeholder='Search by Title...'
              onChange={this.handleSearch}
              // autoFocus
            />
          </div>
          <div id='button-bar'>
            <button
              type='button'
              onClick={() => this.props.loadMovies('starwars')}
            >
              Load Movie
            </button>
            {/*<button
              onClick={this.props.clear}
              type='button'>
              clear
            </button>*/}
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <div>
            {this.storyList()}
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
    clear: () => dispatch(clear()),
    searchTitles: (event) => dispatch(searchTitles(event))
  }
}
export default connect(mapState, mapDispatch)(Stories)
