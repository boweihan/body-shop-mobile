/* Reduce reducer boilerplate by replacing switch case logic with an object
maps action types to their corresponding case functions. */

export default function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) { // eslint-disable-line
            return handlers[action.type](state, action);
        }
        return state;
    };
}
