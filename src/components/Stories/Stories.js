import React, { Component } from 'react'
import {connect} from 'react-redux'
import { clear, loadStories, searchMovie, searchTitles, fetchAction } from '../../actions'


export class Stories extends Component {
  state = {
    term: ''
  }

  storyList = () => {
    if(this.props.items.length === 0) return null;
    return (
      <div>
        {this.props.items.map(item => (
          <p key={item.id}> {item.title}</p>
        ))}
      </div>
    )
  }
  handleSearch = (event) => {
    this.props.searchTitles(event)
    this.setState({
      term: event
    })
  }

  render () {
    return (
      <div>
        <input
          value={this.state.term}
          placeholder='Search by Title...'
          onChange={event => this.handleSearch(event.target.value)}
          autoFocus
        />
        <button
          type='button'
          onClick={() => this.props.loadMovies('starwars')}
        >
          Load Movie
        </button>
        <button
          type='button'
          onClick={this.props.loadStories}
        >
          Load top 3 stories
        </button>
        <button
          onClick={this.props.clear}
          type='button'>
          clear
        </button>
        {this.storyList()}
      </div>
    )
  }
}

function mapState(state) {
  return state;
}
function mapDispatch(dispatch) {
  return {
    loadStories: () => dispatch(loadStories()),
    loadMovies: (movie) => dispatch(fetchAction(movie)),
    clear: () => dispatch(clear()),
    searchTitles: (event) => dispatch(searchTitles(event))
  }
}
export default connect(mapState, mapDispatch)(Stories)
