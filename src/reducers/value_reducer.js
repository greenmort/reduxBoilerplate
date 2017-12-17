import {SET_VALUE} from '../actions/index';

const initialState='';
const valueReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_VALUE: return action.payload;
        default: return state;
    }
};

export default valueReducer;
