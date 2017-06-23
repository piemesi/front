import constants from '../constants'

const Pages ={
    num: 'first'
};

const PageNavigatorReducer = (state = Pages, action) => {



    switch (action.type) {
        case "SET_PAGE":
            return {...state, num: action.page};
            break;
        case "GET_PAGE":
            return state;
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