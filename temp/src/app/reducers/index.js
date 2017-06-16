import { combineReducers } from 'redux'
import offersReducer from './offers'
import countriesReducer from './countries'
import mapReducer from './map'
import searchReducer from './search'
import footerReducer from './footer'

const myReducer = combineReducers({
    footerReducer,
    offersReducer,
    searchReducer,
    countriesReducer,
    mapReducer
});

export default myReducer