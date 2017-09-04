'use strict';

import React from 'react';
import sinon from 'sinon';
import TaskList from '../../src/components/TaskList';

describe('Components: <TaskList />', () => {

    it('should renders without crashing', () => {
        const onComplete = sinon.spy();

        const props = {
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
            onComplete: onComplete
        };

        const wrapper = mount (
            <TaskList {...props} />
        );

        expect(wrapper.find('Task')).toHaveLength(4);

        expect(wrapper).toMatchSnapshot();
    });

});
