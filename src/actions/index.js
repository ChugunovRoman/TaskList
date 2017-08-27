'use strict';

import axios from 'axios';

import config from '../../app/config';

const receiveTasks = tasks => ({
    type: 'RECEIVE_TASKS',
    tasks
});

const completeTask = id => ({
    type: 'COMPLITE_TASK',
    id
});

export function getTasks() {
    return function(dispatch) {
        return axios.post(`http://${config.server.host}:${config.server.port}/get/tasks`)
            .then(res => res.data,
                err => console.log(err)
            )
            .then(data => dispatch(receiveTasks(data)));
    }
}

export function requestCompleteTask(id) {
    return function(dispatch) {
        return axios.post(`http://${config.server.host}:${config.server.port}/del/task/${id}`)
            .then(res => res.data,
                err => console.log(err)
            )
            .then(() => dispatch(completeTask(id)));
    }
}

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});
