import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'
import {
  FETCH_ACTION, fetchFulfilled, searchError,
  searchLoading, CANCEL_SEARCH
} from '../actions'

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
    .delay(500) // *DEV ONLY* Adding forcing delay as example for cancel operation

function loadStoriesEpic (action$) {
  return action$.ofType(FETCH_ACTION)
    .debounceTime(400) // resetting while there is a new event
    .filter(action => action.payload !== '')
    .switchMap(({payload}) => {

      // Loading State UI
      const loading = Observable.of(searchLoading(true))

      // strategy of cancelling requests according to the actions
      const blockers = Observable.merge(
        action$.ofType(CANCEL_SEARCH),
        // action$.ofType(NAVIGATE) // example
      )

      // External Request
      const request = ajax(payload)
      // if TakeUntil receives a value, it will not proceed to the next operation
        .takeUntil(blockers)
        .map(response => fetchFulfilled(response))
        .catch(err => {
          return Observable.of(searchError(err))
        })

      // Subscribing sequentially
      return Observable.concat(
        loading,
        request
      )
    })
}

export const rootEpic = combineEpics(loadStoriesEpic)
