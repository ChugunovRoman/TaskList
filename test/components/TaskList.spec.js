'use strict';

import React from 'react';
import TaskList from '../../src/components/TaskList';

const setup = (setupProps = {}) => {
    const defaultProps = {
        tasks: [
            {
                id: '0',
                name: 'Task 1',
                description: 'Description 1'
            },
            {
                id: '1',
                name: 'Task 2',
                description: 'Description 2',
                completed: true
            },
            {
                id: '2',
                name: 'Task 3',
                description: 'Description 3',
                completed: true
            },
            {
                id: '3',
                name: 'Task 4',
                description: 'Description 4'
            }
        ],
        onComplete: jest.fn()
    };

    const props = { ...defaultProps, ...setupProps };
    const wrapper = mount (
        <TaskList {...props} />
    );

    return {
        props,
        wrapper
    }
}

describe('Components: <TaskList />', () => {

    it('should renders without crashing', () => {
        const { wrapper } = setup();

        expect(wrapper.find('Task')).toHaveLength(4);

        expect(wrapper).toMatchSnapshot();
    });

});
