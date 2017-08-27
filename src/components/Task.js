'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const onShowDescription = (el) => {
    let desc = el.nextSibling,
        descHeight = 40;

    desc.childNodes.forEach(node => {
        descHeight += node.getBoundingClientRect().height;
    });

    desc.style.maxHeight = desc.style.maxHeight ? '' : `${descHeight}px`;
}

const Task = ({ onComplete, id, name, description, completed }) => {
    let el;

    return (
        <div className={completed ? 'task task_completed' : 'task'} >
            <div className="task__name"
                ref={(node) => {el = node}}
                onClick={() => onShowDescription(el)}>

                <p>{name}</p>
            </div>
            <div className='task__desc desc'>
                <p className="desc__text">{description}</p>
                <button className="desc__btn btn"
                    value={id}
                    onClick={() => onComplete(id)}
                    disabled={completed ? 'disabled' : ''} >

                    Завершить
                </button>
            </div>
        </div>
    );
};

Task.PropTypes = {
    onComplete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool
};

export default Task;
