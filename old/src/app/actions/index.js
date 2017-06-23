import faker from 'faker'
import GET_INIT_DATA from '../constants'
import {getHashOffersRoute, getAllDataRoute, getInitRoutesUrls} from '../constants/routes'

import base64 from 'base-64';
import axios from 'axios';
import cors from 'cors';

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
                    if (response.ok) {
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
    console.log('GIR', getInitRoutesUrls())

    return {
        type: 'GET_INIT_ROUTES',
        payload: fetch(getInitRoutesUrls())
            .then(response => {
                if (response.ok) {
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

export const getInitData = (url) => {

    console.log('current request is getInitData url is', url)

    url = url || getAllDataRoute();


    return {
        type: 'GET_INIT_DATA',
        payload: fetch(url)
            .then(response => {
                if (response.ok) {

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


export const setCurrentPage = (page) => {
    return {
        type: 'SET_PAGE',
        page
    }
};


export const setCourse = (course) => {
    return {
        type: 'SET_COURSE',
        course
    }
};

export const setShift = (shift) => {
    return {
        type: 'SET_SHIFT',
        shift
    }
};

export const setPeriod = (period) => {
    return {
        type: 'SET_PERIOD',
        period
    }
};

export const sendData = (state) => {

    let {course, shift, period} = state;


    let data = [course, shift, period.start || null,period.end || null];
    let link = base64.encode(data);

    console.log('finalLink is', link);
    return {
        type: 'SEND_DATA',
        link
    }
};