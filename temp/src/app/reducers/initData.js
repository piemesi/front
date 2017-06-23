import constants from '../constants'


const initDataReducer = (state = {}, action) => { //state = {courseType,shift}




    switch (action.type) {


        case 'GET_TOKEN_FULFILLED':
            console.log('fulfiled', action)
            return {
                ...state,
                ...action.payload
            }
            break;
        case `GET_TOKEN_REJECTED`:
            console.log('rejected', action)
            return {
                ...state,

            }
            break;

        case 'CHECK_LOGIN_FULFILLED':
            console.log('fulfiled', action)
            return {
                ...state,
                ...action.payload
            }
            break;
        case `CHECK_LOGIN_REJECTED`:
            console.log('rejected', action)
            return {
                ...state,

            }
            break;


        case 'SEND_CODE_FULFILLED':
            console.log('fulfiled', action)
            return {
                ...state,
                ...action.payload
            }
            break;
        case `SEND_CODE_REJECTED`:
            console.log('rejected', action)
            return {
                ...state,

            }
            break;

        case 'RESEND_CODE_FULFILLED':
            console.log('fulfiled', action)
            return {
                ...state,
                ...action.payload
            }
            break;
        case `RESEND_CODE_REJECTED`:
            console.log('rejected', action)
            return {
                ...state,

            }
            break;

        case 'SEND_SESSION_FULFILLED':
            console.log('fulfiled', action)
            return {
                ...state,
                ...action.payload
            }
            break;
        case `SEND_SESSION_REJECTED`:
            console.log('rejected', action)
            return {
                ...state,

            }
            break;

        case 'GET_INIT_DATA_FULFILLED':
            console.log('fulfiled', action)
            return {
                ...state,
                ...action.payload
            }
            break;
        // case `${GET_INIT_DATA}_REJECTED`:
        case `GET_INIT_DATA_REJECTED`:
            console.log('rejected', action)
            return {
                ...state,
                // books: false,
                // authors: false,
                // genres: false
            }
            break;

        case 'GET_INIT_ROUTES_FULFILLED':
            console.log('fulfiled GET_INIT_ROUTES', action)
            return {
                ...state,
                ...action.payload
            }
            break;
        // case `${GET_INIT_DATA}_REJECTED`:
        case `GET_INIT_ROUTES_REJECTED`:
            console.log('rejected', action)
            return {
                ...state,
                // books: false,
                // authors: false,
                // genres: false
            }
            break;


        case `SET_REQUEST_DATA`:
            console.log('SET_REQUEST_DATA', action)
            return {
                ...state,
               requestData: {
                   course: action.course,
                   shift: action.shift,
                   ds: action.ds,
                   df: action.df,
               }
            }
            break;

        case constants.SELECT_COUNTRIES:

            console.log('selected', action.selected);
            let s = action.selected.map((sel) => {

                    let sub = countries.all.find((element, index) => {
                            return (element.valueKey == sel)
                        }
                    );
                    return sub;

                })
            ;

            //  Object.assign(state.selected, action.selected);

            state = {
                ...state,
                selected: s
            };
            console.log('state', state);
            return state;
            break;
        default:

            return state;
            break;
    }

};

export default initDataReducer