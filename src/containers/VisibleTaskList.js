'use strict';

import React from 'react';
import { requestCompleteTask } from '../actions';
import { connect } from 'react-redux';

import { getVisibleTask } from '../helpers';
import TaskList from '../components/TaskList';

const mapStateToProps = (state, ownProps) => ({
        tasks: getVisibleTask(state.tasks, state.visibilityFilter)
});

const mapDispatchToProps = {
    onTaskComplete: requestCompleteTask
}

const VisibleTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default VisibleTaskList;
