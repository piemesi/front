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

export const getInitData = (url) => {

    // console.log('current request is getInitData url is', url)

    url = url || getAllDataRoute();
    // console.log('current request is getInitData url is', url)

    return {
        type: 'GET_INIT_DATA',
        payload: fetch(url, cors )
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


        payload: axios.post(url, cors, {
                // body: data,
                method: 'POST',
                mode: 'cors',
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

                console.log('response', response)

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

    console.log('current request   is checkLogin')

    let url = baseUrl + '/login/';

    console.log('url is:', url)

    let data = new FormData();
    data.append("token", token);
    data.append("login", login);

    return {
        type: 'CHECK_LOGIN',
        payload: axios.post(url, cors, {
                body: data,
                method: 'POST', mode: 'cors'
            }
        )
            .then(response => {

                console.log('response', response)

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
        payload: axios.post(url, cors, {
                body: data,
                method: 'POST', mode: 'cors'
            }
        )
            .then(response => {
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


export const resendCode = (baseUrl) => {

    console.log('current request is resendCode')

    let url = baseUrl + '/resend/';

    console.log('url is:', url)

    let data = new FormData();
    data.append("token", 'sometoken');

    return {
        type: 'RESEND_CODE',
        payload: axios.post(url, {
                body: data,
                method: 'POST', mode: 'cors'
            }
        )
            .then(response => {
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

export const sendSession = (baseUrl,token) => {

    console.log('current request is sendSession')

    let url = baseUrl + '/session/';

    url = url+ '?token='+token; //@toDo - delete

    console.log('url is:', url)

    let data = new FormData();
    data.append("token", token);

    return {
        type: 'SEND_SESSION',
        payload: axios.get(url, cors, { // @toDo to post
              //  body: data,
                //, mode: 'cors'
            }
        )
            .then(response => {
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

export const setRequestData = (reqData) => {

    console.log('InitRegData SETTING', reqData)

    let [course = null, shift = null, ds = null, df = null] = reqData;

    if (ds) {
        ds = new Date(ds);
    }

    if (df) {
        df = new Date(df);
    }



    return {
        type: 'SET_REQUEST_DATA',
        course, shift, ds, df
    }
};