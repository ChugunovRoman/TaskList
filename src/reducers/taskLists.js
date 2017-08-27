'use strict';

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

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_TASKS':
            return action.tasks.sort((a, b) => a.completed ? 1 : 0); // Заменяем наши таски, тасками с сервера
            // return [...state, ...action.tasks]; // Добавляем к нашим таскам таски с сервера
            break;
        case 'COMPLITE_TASK':
            return state.map(t =>
                (t.id === action.id)
                    ? Object.assign({}, t, {completed: !t.completed})
                    : t
            ).sort((a, b) => a.completed ? 1 : 0);
            break;
        default:
            return state;
    }
}

export default taskListReducer;
