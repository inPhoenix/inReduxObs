import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'
import { clear, FETCH_ACTION, fetchFulfilled, LOAD_STORIES } from '../actions'

const NEW_URL = 'https://api.themoviedb.org/3/movie/'
const NEW_API_KEY = '?api_key=047cb4fb0e88284becb1c8a87da00343'

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'
const LANGUAGE = '&language=en-US&'
const END_OPTIONS = '&page=1&include_adult=false'
const QUERY = `query=`

//const complete = `${SEARCH_URL}${NEW_API_KEY}${LANGUAGE}${QUERY}${payload}${END_OPTIONS}`
const gitHubUrl = `https://api.github.com/users/inPhoenix`
const complete = `https://api.themoviedb.org/3/search/movie?api_key=047cb4fb0e88284becb1c8a87da00343&language=en-US&query=starwars&page=1&include_adult=false`

//const urlRequest = `${SEARCH_URL}${NEW_API_KEY}${LANGUAGE}${QUERY}${movieTitle}${END_OPTIONS}`

// `${SEARCH_URL}${NEW_API_KEY}${LANGUAGE}${QUERY}${token}${END_OPTIONS}`,
function loadStoriesEpic (action$) {
  const requestSettings = token => ({
    url:complete,
    crossDomain: true,
    contentType: "application/json; charset=utf-8",
    responseType:'json',
  })
  console.log('%c loadStoriesEpic', 'background:black;color:DarkSlateGray;')
  console.log(action$)
  return action$.ofType(FETCH_ACTION)
    .switchMap(({payload})=> {
      return Observable.ajax(requestSettings(payload))
      .map(response => fetchFulfilled(response))
  })
}

//.delay(2000) // free debounce
export const rootEpic = combineEpics(loadStoriesEpic)
