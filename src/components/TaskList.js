'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const TaskList = ({tasks, onTaskComplete}) => (
    <div className='app__tasks tasks'>
        {tasks.map(task =>
            <Task
                key={task.id}
                {...task}
                onComplete={() => onTaskComplete(task.id)}
            />
        )}
    </div>
);

TaskList.PropTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool
    }).isRequired).isRequired,
    onTaskComplete: PropTypes.func.isRequired
};

export default TaskList;
