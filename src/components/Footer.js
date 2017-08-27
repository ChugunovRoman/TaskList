'use strict';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getVisibleTask } from '../helpers';
import Filter from '../containers/Filter';

const Footer = ({ tasks }) => (
    <div className='app__footer footer'>
        <strong className='footer__count'>
            {tasks.length ?
                `Task count: ${tasks.length}` :
                'Задачи отсутствуют' }
        </strong>
        <span className="footer__filter"> | Show: {" "}
            <Filter filter="SHOW_ALL">All tasks</Filter>{", "}
            <Filter filter="SHOW_ACTIVE">Active</Filter>{", "}
            <Filter filter="SHOW_COMPLETED">Completed</Filter>
        </span>
    </div>
);

Footer.PropTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool
    }).isRequired).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
        tasks: getVisibleTask(state.tasks, state.visibilityFilter)
});

export default connect(mapStateToProps)(Footer);
