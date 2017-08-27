'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { getTasks } from '../actions';

const GetTasks = ({ dispatch }) => (
    <div className="app__gettasks gettasks">
        <button className="gettasks__btn btn" onClick={() => dispatch(getTasks())}>Get tasks</button>
    </div>
);

export default connect()(GetTasks);
