import axios from 'axios'
export const SEARCH_MOVIE = 'SEARCH_MOVIE'
export const SEARCH_TITLES = 'SEARCH_TITLES'
export const FETCH_ACTION = 'FETCH_ACTION'
export const FETCH_ACTION_FULFILLED = 'FETCH_ACTION_FULFILLED'
export const SEARCHED_ERROR = 'SEARCHED_ERROR'
export const SEARCH_LOADING = 'SEARCH_LOADING'
export const CANCEL_SEARCH = 'CANCEL_SEARCH'

const NEW_URL = 'https://api.themoviedb.org/3/movie/'
const NEW_API_KEY = '?api_key=047cb4fb0e88284becb1c8a87da00343'

export function fetchAction(movie) {
  return {
    type: FETCH_ACTION,
    payload: movie
  }
}

export function fetchFulfilled(test) {
  return {
    type: FETCH_ACTION_FULFILLED,
    payload: test.response
  }
}

// Search Movie given an ID
export function searchMovie (id) {
  return function(dispatch) {
    return axios.get(`${NEW_URL}${id}${NEW_API_KEY}`).then(
      response =>  dispatch(movieSearched(response)))
  }
}

export function movieSearched(response) {
  return {
    type: SEARCH_MOVIE,
    payload: response
  }
}
export function searchLoading(loading) {
  return {
    type: SEARCH_LOADING,
    payload: loading
  }
}

export function cancelSearch() {
  return {
    type: CANCEL_SEARCH,
  }
}

export function searchError(err) {
  return {
    type: SEARCHED_ERROR,
    payload: err.message
  }
}

