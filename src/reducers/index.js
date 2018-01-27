import * as actionTypes from '../actions/index'

const initialState = {
  current: null,
  loading: false,
  messages: []
};

export function storiesReducer(state = initialState, action) {
  switch(action.type) {
    // RECEIVED_LIST_OF_MOVIES
    case actionTypes.FETCH_ACTION_FULFILLED:
      console.log('%c reducerFulFilled', 'background:black;color:DarkSlateGray;')
      return {
        ...state,
        current: action.payload,
        loading: false
      }
    case actionTypes.SEARCH_LOADING:
      return {
        ...state,
        // current: null,
        // loading: true,
        messages: []
      }
    case actionTypes.FETCH_ACTION:
        return {
          ...state,
          // current: null,
          // loading: true,
          messages: []
      }
    case actionTypes.SEARCHED_ERROR:
      console.log('%c action', 'background:black;color:DarkSlateGray;', action)
      return {
        ...state,
        messages: [{type: 'error', text: action.payload}],
        loading: false,
      }
    case actionTypes.SEARCH_MOVIE:
      return { ...state, newMovie: action.payload.data }
    case actionTypes.SEARCH_TITLES:
      console.log('%c action', 'background:black;color:DarkSlateGray;', action)
      return {
        ...state,
        newTitle: action.payload
      }
    default:
      return state
  }
};

export default storiesReducer;
