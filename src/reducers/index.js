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
      return {
        ...state,
        current: action.payload,
        loading: false
      }
    case actionTypes.SEARCH_LOADING:
      return {
        ...state,
        // current: null,
        loading: true,
        messages: []
      }
    case actionTypes.CANCEL_SEARCH:
      return {
        ...state,
        loading: false,
        messages: [{type: 'info', text: 'Request Cancelled' }]
      }

    case actionTypes.FETCH_ACTION:
        return {
          ...state,
          // current: null,
          // loading: true,
          messages: []
      }
    case actionTypes.SEARCHED_ERROR:
      return {
        ...state,
        messages: [{type: 'error', text: action.payload}],
        loading: false,
      }
    case actionTypes.SEARCH_MOVIE:
      return {
        ...state,
        movie: action.payload.data }
    default:
      return state
  }
};

export default storiesReducer;
