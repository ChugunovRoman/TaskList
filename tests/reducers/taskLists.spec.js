'use strict';

import taskLists from '../../src/reducers/taskLists';

const initialState = [
    {
        id: 0,
        name: 'Initial Task1',
        completed: false,
        description: 'description1'
    },
    {
        id: 1,
        name: 'Initial Task2',
        completed: false,
        description: 'description2'
    }
];

describe('task list reducer', () => {

    it('Should handle initial state', () => {
        expect(
            taskLists(initialState, {})
        ).toEqual(initialState);
    });

    it('Should handle receive tasks', () => {
        expect(
            taskLists(initialState, {
                type: 'RECEIVE_TASKS',
                tasks: [
                    {
                        id: 0,
                        name: 'write test',
                        description: 'Write test for react component'
                    }
                ]
            })
        ).toEqual([
            {
                id: 0,
                name: 'write test',
                description: 'Write test for react component'
            }
        ]);
    });

    it('Should handle receive tasks', () => {
        expect(
            taskLists([
                {
                    id: 0,
                    name: 'write test',
                    description: 'Write test for react component'
                }
            ], {
                type: 'RECEIVE_TASKS',
                tasks: [
                    {
                        id: 1,
                        name: 'Learn React',
                        description: 'Learn react for the minimal period time'
                    }, {
                        id: 2,
                        name: 'Create isomorphic app',
                        description: 'Create isomorphic app'
                    }
                ]
            })
        ).toEqual([
            {
                id: 1,
                name: 'Learn React',
                description: 'Learn react for the minimal period time'
            }, {
                id: 2,
                name: 'Create isomorphic app',
                description: 'Create isomorphic app'
            }
        ]);
    });

    it('Should handle complete task', () => {
        expect(
            taskLists([
                {
                    id: 1,
                    name: 'Learn React',
                    description: 'Learn react for the minimal period time'
                }, {
                    id: 2,
                    name: 'Create isomorphic app',
                    description: 'Create isomorphic app'
                }
            ], {
                type: 'COMPLITE_TASK',
                id: 2
            })
        ).toEqual([
            {
                id: 1,
                name: 'Learn React',
                description: 'Learn react for the minimal period time'
            }, {
                id: 2,
                name: 'Create isomorphic app',
                description: 'Create isomorphic app',
                completed: true
            }
        ]);
    });
});
