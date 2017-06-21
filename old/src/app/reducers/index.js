import { combineReducers } from 'redux'
// import offersReducer from './offers'
// import countriesReducer from './countries'
// import mapReducer from './map'
// import searchReducer from './search'
// import footerReducer from './footer'
import initDataReducer from './initData'

const myReducer = combineReducers({

    initDataReducer

    // footerReducer,
    // offersReducer,
    // searchReducer,
    // countriesReducer,
    // mapReducer
});

export default myReducer