// Функции-помошники

export const getVisibleTask = (tasks, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return tasks;
            break;
        case 'SHOW_COMPLETED':
            return tasks.filter(t => t.completed);
            break;
        case 'SHOW_ACTIVE':
            return tasks.filter(t => !t.completed);
            break;
        default:
            throw new Error('Unknown filter: ' + filter);
    }
}
