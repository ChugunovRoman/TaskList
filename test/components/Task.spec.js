'use strict';

import React from 'react';
import sinon from 'sinon';

import Task from '../../src/components/Task';

describe('Components: <Task />', () => {

    it('should parse props with mount', () => {
        const value = '0';
        const onComplete = sinon.spy();

        const props = {
            key: "0",
            id: "0",
            name: "Name",
            description: "description of task",
            onComplete: onComplete
        };

        const wrapper = mount (
            <Task {...props} />
        );

        expect(wrapper.prop('id')).toEqual('0');
        expect(wrapper.prop('name')).toEqual('Name');
        expect(wrapper.find('p').at(0).text()).toEqual('Name');
        expect(wrapper.prop('description')).toEqual('description of task');
        expect(wrapper.find('p').at(1).text()).toEqual('description of task');
        expect(wrapper.find('div')).toHaveLength(3);

        expect(wrapper).toMatchSnapshot();

        wrapper.find('button.desc__btn').simulate('click', { target: { value } });
        expect(onComplete.calledOnce).toEqual(true);

        expect(wrapper).toMatchSnapshot();
    });
});
