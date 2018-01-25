import * as actionTypes from '../actions/index'
const initialState = {
  movies: [
    'starwars',
    'alien'
  ],
  items: [],
  current: null,
  loading: false,
};

export function storiesReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.FETCH_ACTION_FULFILLED:
      console.log('%c reducerFulFilled', 'background:black;color:DarkSlateGray;')
      return {
        ...state,
        current: action.payload,
        loading: false

      }
    case actionTypes.FETCH_ACTION:
        return {
          ...state,
          current: null,
          loading: true

      }
    case actionTypes.LOAD_STORIES:
      return {items: stories.slice()}
    case actionTypes.CLEAR_STORIES:
      return {items: []}
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


const stories = [
  {
    "id": "95c12a8f6c88953ca8f8a39da25546e6",
    "title": "Introducing React's Error Code System",
    "date": "Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)",
    "authorId": "2c6aa2cfe3449467d329fa17d6ea230f",
    "body": "Building a better developer experience has been one of the things that React deeply cares about, and a crucial part of it is to detect anti-patterns/potential errors early and provide helpful error messages when things (may) go wrong. However, most of these only exist in development mode; in production, we avoid having extra expensive assertions and sending down full error messages in order to reduce the number of bytes sent over the wire."
  },
  {
    "id": "cc7781c085cf37aabf120098085ff60c",
    "title": "Mixins Considered Harmful",
    "date": "Wed Jul 13 2016 00:00:00 GMT+0000 (UTC)",
    "authorId": "78ae672985c41fae0ecde0133f41bbfa",
    "body": "“How do I share the code between several components?” is one of the first questions that people ask when they learn React. Our answer has always been to use component composition for code reuse. You can define a component and use it in several other components. \nIt is not always obvious how a certain pattern can be solved with composition. React is influenced by functional programming but it came into the field that was dominated by object-oriented libraries. It was hard for engineers both inside and outside of Facebook to give up on the patterns they were used to."
  },
  {
    "id": "0a9afe5bb4ecbf4f7f1c77611e9bf1f9",
    "title": "Create Apps with No Configuration",
    "date": "Fri Jul 22 2016 00:00:00 GMT+0000 (UTC)",
    "authorId": "78ae672985c41fae0ecde0133f41bbfa",
    "body": "Create React App is a new officially supported way to create single-page React applications. It offers a modern build setup with no configuration. \n\nGetting Starte \nInstallation \nFirst, install the global package:"
  }]
