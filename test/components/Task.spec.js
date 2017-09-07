'use strict';

import React from 'react';
import Task from '../../src/components/Task';

const setup = (setupProps = {}) => {
    const defaultProps = {
        key: "0",
        id: "0",
        name: "Name",
        description: "description of task",
        onComplete: jest.fn()
    };

    const props = { ...defaultProps, ...setupProps };
    const wrapper = mount (
        <Task {...props} />
    );

    return {
        props,
        wrapper
    };
};

describe('Components: <Task />', () => {
    it('should parse props with mount', () => {
        const { props, wrapper } = setup();
        const preventDefault = jest.fn();

        expect(wrapper.prop('id')).toEqual('0');
        expect(wrapper.prop('name')).toEqual('Name');
        expect(wrapper.find('p').at(0).text()).toEqual('Name');
        expect(wrapper.prop('description')).toEqual('description of task');
        expect(wrapper.find('p').at(1).text()).toEqual('description of task');
        expect(wrapper.find('div')).toHaveLength(3);

        expect(wrapper).toMatchSnapshot();

        wrapper.find('button.desc__btn').simulate('click', { preventDefault });
        expect(props.onComplete).toBeCalled();
        // expect(preventDefault).toBeCalled(); // Expected mock function to have been called.

        expect(wrapper).toMatchSnapshot();
    });
});
