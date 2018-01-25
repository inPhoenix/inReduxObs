import React, { Component } from 'react'
import {connect} from 'react-redux'
import { clear, loadStories } from '../../actions'


export class Stories extends Component {

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

  render () {
    console.log('%c this.props', 'background:black;color:DarkSlateGray;', this.props)
    return (
      <div>
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
    clear: () => dispatch(clear()),
  }
}
export default connect(mapState, mapDispatch)(Stories)
