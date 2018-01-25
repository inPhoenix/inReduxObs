export const LOAD_STORIES = 'LOAD_STORIES'
export const CLEAR_STORIES = 'CLEAR_STORIES'
export const SEARCH_MOVIE = 'SEARCH_MOVIE'
export const SEARCH_TITLES = 'SEARCH_TITLES'
export const FETCH_ACTION = 'FETCH_ACTION'
export const FETCH_ACTION_FULFILLED = 'FETCH_ACTION_FULFILLED'


const NEW_URL = 'https://api.themoviedb.org/3/movie/'
const NEW_API_KEY = '?api_key=047cb4fb0e88284becb1c8a87da00343'

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'
const LANGUAGE = '&language=en-US&'
const END_OPTIONS = '&page=1&include_adult=false'
const QUERY = `query=`


export function fetchAction(movie) {
  console.log('fetchAction 1: ', movie)
  return {
    type: FETCH_ACTION,
    payload: movie
  }
}
export function fetchFulfilled(test) {
  console.log('%c fetchFulfilled!', 'background:black;color:DarkSlateGray;', )
  return {
    type: FETCH_ACTION_FULFILLED,
    payload: test
  }
}

// Search Movie given an ID
export function searchMovie (id) {
  fetch(`${NEW_URL}${id}${NEW_API_KEY}`).then(
    response => {
      return {
        type: SEARCH_MOVIE,
        payload: response
      }
    }
  )
}

// Search Titles
export function searchTitles (movieTitle) {
  console.log('%c searchTitles', 'background:black;color:DarkSlateGray;')
  const urlRequest = `${SEARCH_URL}${NEW_API_KEY}${LANGUAGE}${QUERY}${movieTitle}${END_OPTIONS}`
  const newRequest = fetch(urlRequest)
  return {
    type: SEARCH_TITLES,
    payload: newRequest
  }
}



export function loadStories() {
  return {
    type: LOAD_STORIES
  }
}

export function clear() {
  return {
    type: CLEAR_STORIES
  }

}

