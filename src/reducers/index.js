'use strict';

import { combineReducers } from 'redux';

import tasks from './taskLists';
import visibilityFilter from './visibilityFilter';

let reducers = combineReducers({
    tasks,
    visibilityFilter
});

export default reducers;
