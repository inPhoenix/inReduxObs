import React, {Component} from 'react'
import { connect } from 'react-redux'
import { searchMovie } from '../../actions'

class MovieListItem extends Component {
  state = {
    error: false
  }

  handleError () {
    this.setState({
      error: true
    })
  }

  getImage () {
    if (this.state.error) {
      return
    }
    return <img id='image-thumbnail'
                style={{ width: '50%'}}
                src={this.props.posterPath}
                onError={() => this.handleError()} />
  }

  render () {
    return (
      <li className='suggestion' style={{ listStyleType: 'none'}}
          onClick={() => this.props.searchMovie(this.props.movieId)}
      >
        {this.getImage()}
      </li>
    )
  }
}

function mapDispatch(dispatch) {
  return {
    searchMovie: (movieId) => dispatch(searchMovie(movieId)),
  }
}

export default connect(null, mapDispatch)(MovieListItem)
