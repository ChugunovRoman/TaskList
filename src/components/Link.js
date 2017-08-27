'use strict';

import React from 'react';
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <a href="#"
        className={active ? 'link link_active' : 'link' }
        onClick={event => {
            event.preventDefault();
            onClick();
        }}>
        {children}
    </a>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;
