import createReducer from '../../libs/createReducer';
import * as types from '../types';

// NEED TO SET LEVEL TO BE NULL SO THAT WE CAN PULL FROM LOCALSTORAGE IN Propagate.js
export const level = createReducer(null, {
    [types.SET_LEVEL](state, action) {
        return action.level;
    },
    [types.INCREMENT_LEVEL](state, action) {
        return action.level + 1;
    },
});

export const highestLevel = createReducer(null, {
    [types.SET_HIGHEST_LEVEL](state, action) {
        return action.level;
    },
});
