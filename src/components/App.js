'use strict';

import React from 'react';

import GetTasks from './GetTasks';
import VisibleTaskList from '../containers/VisibleTaskList';
import Footer from './Footer';

const App = () => (
    <div className="app">
        <GetTasks />
        <VisibleTaskList />
        <Footer />
    </div>
)

export default App;
