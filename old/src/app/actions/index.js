import faker from 'faker'
import GET_INIT_DATA from '../constants'
import {getHashOffersRoute, getAllDataRoute,getInitRoutesUrls } from '../constants/routes'




export const addNewUser = () => {
    const username = `@${faker.internet.userName().toLowerCase()}`
    return dispatch => {
        dispatch({
            type: 'ADD_NEW_USER',
            username
        })

        dispatch(newMessage(
            username,
            'Hello guys..',
            Date.now()
        ))
    }
}

export const selectNewOffer = (author, text, datetime) => {
    return {
        type: 'SELECT_NEW_OFFER',
        author, text, datetime
    }
};


export const getHashOffers = () => {

    // console.log('CCCCCC',constants.GET_HASH_OFFERS)
    // console.log('CCCCCC1',getHashOffersRoute())
    return (dispatch) => {
        dispatch({
            type: constants.GET_HASH_OFFERS,
            payload: fetch(getHashOffersRoute())
                .then(response => {
                    if( response.ok ) {
                        return response.json()
                    }
                    else {
                        return Promise.reject();
                    }
                })
                .then(json => {
                    return Promise.resolve(json)
                })
        })
    };
};

export const showMap = () => {
    return {
        type: 'SHOW_MAP'
    }
};

export const showSearch = () => {

    return {
        type: 'SHOW_SEARCH'
    }
};

export const selectCountries = (selected) => {

    return {
        type: 'SELECT_COUNTRIES',
        selected
    }
};

export const getInitRoutes = () => {

 
    return {
        type: 'GET_INIT_ROUTES',
        payload: fetch(getInitRoutesUrls())
            .then(response => {
                if( response.ok ) {
                    return response.json()
                }
                else {
                    return Promise.reject();
                }
            })
            .then(json => {
                return Promise.resolve(json)
            })
    }
};

export const getInitData = () => {

    console.log('current request is getInitData')

    return {
        type: 'GET_INIT_DATA',
        payload:fetch(getAllDataRoute())
            .then(response => {
                if( response.ok ) {

                     return response.json();///

                }
                else {
                    return Promise.reject();
                }
            })
            .then(json => {
                return Promise.resolve(json)
            })



    }
};


