'use strict';

import taskLists from '../../src/reducers/visibilityFilter';

const initialState = 'SHOW_ACTIVE';

describe('visibility filter reducer', () => {

    it('Should handle initial state', () => {
        expect(
            taskLists(initialState, {})
        ).toEqual(initialState);
    });

    it('Should handle change filter', () => {
        expect(
            taskLists(initialState, {
                type: 'SET_VISIBILITY_FILTER',
                filter: 'SHOW_ALL'
            })
        ).toEqual('SHOW_ALL');

        expect(
            taskLists('SHOW_ALL', {
                type: 'SET_VISIBILITY_FILTER',
                filter: 'SHOW_COMPLETED'
            })
        ).toEqual('SHOW_COMPLETED');
    });

});
