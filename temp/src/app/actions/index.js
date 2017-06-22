// import faker from 'faker'
import constants from '../constants'
import {getAllDataRoute, getInitRoutesUrls} from '../constants/routes'

import axios from 'axios';
import cors from 'cors';


export const addNewUser = () => {
    // const username = `@${faker.internet.userName().toLowerCase()}`
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

export const getPage = () => {
    return {
        type: 'GET_PAGE',
    }
};

export const setCurrentPage = (page) => {
    return {
        type: 'SET_PAGE',
        page
    }
};

export const getInitRoutes = () => {

    console.log('getInitRoutes', getInitRoutesUrls())
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

export const getInitData = () => {

    console.log('current request is getInitData')

    return {
        type: 'GET_INIT_DATA',
        payload: fetch(getAllDataRoute())
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


export const getToken = (baseUrl) => {

    console.log('current request is getToken')

    let url = baseUrl + '/token/';

    console.log('url is:', url)
    // let payload = {
    //     a: 1,
    //     b: 2
    // };
    // let data = new FormData();
    // data.append( "json", JSON.stringify( payload ) );


    // let payload = {
    //     a: 1,
    //     b: 2
    // };
    // let data = new FormData();
    // data.append( "token",  'sometoken'); //JSON.stringify( payload )
    // data.append( "param",  'someparam');


    return {
        type: 'GET_TOKEN',
        // payload:  fetch(url, {
        //     // ...this._init,
        //     body: JSON.stringify({
        //         query: 'sdsd',
        //         variables: 'sdsdds',
        //     }),
        //     headers: {
        //         // ...this._init.headers,
        //         'Accept': '*/*',
        //         'Content-Type': 'text/plain',
        //     },
        //     method: 'POST',
        // })


        payload: axios(url, cors, {
                // body: data,
                method: 'POST', mode: 'cors',
                // headers: {
                //     'Access-Control-Allow-Origin': '*',
                //     "Content-Type": "application/json; charset=UTF-8",
                //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                //     "Access-Control-Allow-Headers": "Content-Type",
                //     "Access-Control-Request-Headers": "X-Requested-With, accept, content-type",
                //     'X-Requested-With': 'XMLHttpRequest'
                //     // "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                // },
                // credentials: 'same-origin'
            }
            //axios: ,{},{
            // "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept" }
        )
            .then(response => {

                console.log('response',response)

                if (response.status == 200) {

                    return response.data;///json()

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

export const checkLogin = (baseUrl, token, login) => {

    console.log('current request is checkLogin')

    let url = baseUrl + '/login/';

    console.log('url is:', url)

    let data = new FormData();
    data.append("token", token);
    data.append("login", login);

    return {
        type: 'CHECK_LOGIN',
        payload: axios(url, cors, {
                body: data,
                method: 'POST', mode: 'no-cors'
            }
        )
            .then(response => {

                console.log('response',response)

                if (response.status == 200) {

                    return response.data;

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

export const sendCode = (baseUrl) => {

    console.log('current request is sendCode')

    let url = baseUrl + '/code/';

    console.log('url is:', url)

    let data = new FormData();
    data.append("token", 'sometoken');
    data.append("code", 'somecode');

    return {
        type: 'SEND_CODE',
        payload: axios(url,cors, {
                body: data,
                method: 'POST', mode: 'no-cors'
            }
        )
            .then(response => {
                if (response.ok) {

                    return response.json();

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


export const resendCode = (baseUrl) => {

    console.log('current request is resendCode')

    let url = baseUrl + '/resend/';

    console.log('url is:', url)

    let data = new FormData();
    data.append("token", 'sometoken');

    return {
        type: 'RESEND_CODE',
        payload: fetch(url, {
                body: data,
                method: 'POST', mode: 'no-cors'
            }
        )
            .then(response => {
                if (response.ok) {

                    return response.json();

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