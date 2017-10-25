/* Index.js accessed by default in module imports, this saves
us from having to import each reducer separately */

import { combineReducers } from 'redux';
import * as ExampleReducer from './exampleReducer';

export default combineReducers(Object.assign(
    ExampleReducer,
));
