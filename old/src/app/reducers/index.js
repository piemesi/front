import { combineReducers } from 'redux'
// import offersReducer from './offers'
// import countriesReducer from './countries'
// import mapReducer from './map'
// import searchReducer from './search'
// import footerReducer from './footer'
import initDataReducer from './initData'
import pageReducer from './page'

const myReducer = combineReducers({
    pageReducer,
    initDataReducer

    // footerReducer,
    // offersReducer,
    // searchReducer,
    // countriesReducer,
    // mapReducer
});

export default myReducer