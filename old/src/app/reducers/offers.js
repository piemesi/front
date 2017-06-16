import constants from '../constants'

const offers = {selected:0, hasHashOffersData:[]};

const offersReducer = (state = offers, action) => {

    console.log("CURRENT_ACTION",action)
    switch (action.type) {
         case `${constants.GET_HASH_OFFERS}_FULFILLED`:
            return {
                ...state,
                ...action.payload
            }

        case `${constants.GET_HASH_OFFERS}_REJECTED`:
            return {
                ...state,
                hasHashOffersData: []
            }


            break;
        case constants.SELECT_NEW_OFFER:
            console.log(action.type)

             state = {
                ...state,
                selected: state.selected+1
            };
            console.log(state);
            return state;
            break;
        case 'SOME_ACTION': console.log('hereeee')
            // console.log(action.type)
            // return state.concat({
            //     text: action.text,
            //     author: action.author,
            //     time: action.time
            // });
            break;
        default:

            return state;
            break;
    }

};

export default offersReducer