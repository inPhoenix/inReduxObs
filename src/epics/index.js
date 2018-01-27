import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'
import { FETCH_ACTION, fetchFulfilled, searchError } from '../actions'

const NEW_URL = 'https://api.themoviedb.org/3/movie/'
const NEW_API_KEY = '?api_key=047cb4fb0e88284becb1c8a87da00343'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'
const LANGUAGE = '&language=en-US&'
const END_OPTIONS = '&page=1&include_adult=false'
const QUERY = `query=`

const requestSettings = token => ({
  url: token ? urlFinal(token) : '',
  crossDomain: true,
  contentType: 'application/json; charset=utf-8',
  responseType: 'json',
})

const urlFinal = (token) => `${SEARCH_URL}${NEW_API_KEY}${LANGUAGE}${QUERY}${token}${END_OPTIONS}`
const ajax = (term) =>
  term === 'alien3'
  ? Observable.throw(new Error('Impossible to search Alien III'))
  : Observable.ajax(requestSettings(term))

function loadStoriesEpic (action$) {
  return action$.ofType(FETCH_ACTION)
    .debounceTime(400) // reseting while there is a new event
    .filter(action => action.payload !== '')
    .switchMap(({payload}) => { // cancellation feature free
      return ajax(payload)
      .map(response => fetchFulfilled(response))
        .catch(err => {
          return Observable.of(searchError(err))
      })
    })
}

export const rootEpic = combineEpics(loadStoriesEpic)
