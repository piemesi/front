import constants from '../constants'

const Pages ={
    num: '1'
};

const PageNavigatorReducer = (state = Pages, action) => {

    console.log('action is',action)

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