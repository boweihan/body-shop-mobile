import * as types from '../types';

export function setLevel(level) {
    return {
        type: types.SET_LEVEL,
        level,
    };
}

export function setHighestLevel(level) {
    return {
        type: types.SET_HIGHEST_LEVEL,
        level,
    };
}
