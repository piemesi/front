import constants from '../constants'


const Pages = {
    num: '1',
    course: '1',
    shift: null,
    period: null,
    link: null
};

const PageNavigatorReducer = (state = Pages, action) => {

    console.log('action is', action)

    switch (action.type) {
        case "SET_PAGE":
            return {...state, num: action.page};
            break;
        case "GET_PAGE":
            return state;
            break;

        case "SET_COURSE":
            return {...state, course: action.course};
            break;

        case "SET_SHIFT":
            return {...state, shift: action.shift};
            break;

        case "SET_PERIOD":
            return {...state, period:  action.period};
            break;


        case "SET_DATA":
            return {...state, link: action.link};
            break;

        case constants.GET_PAGE_NAVIGATOR:


            state = {
                ...state,
                selected: action.selected
            };
            console.log('state', state);
            return state;
            break;
        default:

            return state;
            break;
    }

};

export default PageNavigatorReducer