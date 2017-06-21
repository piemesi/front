import constants from '../constants'

const Pages ={
    currentPage: null
}

const PageNavigatorReducer = (state = Pages, action) => {

    switch (action.type) {
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