'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

const Filter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default Filter;
