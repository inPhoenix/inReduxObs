import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class MovieListItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      error: false
    }
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
    return <img id='image-thumbnail' style={{ width: '50%'}} src={this.props.posterPath} onError={() => this.handleError()} />
  }

  render () {
    // /*onClick={() => this.props.newSearch(this.props.video.id)*/
    return (
      <li id='suggestion' style={{ listStyleType: 'none'}}>
        {this.getImage()}
        <div id='image-title'>
          {this.props.title}
          </div>

      </li>
    )
  }
}

export default connect(null, actions)(MovieListItem)
