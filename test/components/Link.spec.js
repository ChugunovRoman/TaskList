'use strict';

import React from 'react';
import Link from '../../src/components/Link';

const setup = (setupProps = {}) => {
    const defaultProps = {
        active: false,
        children: 'active',
        onClick: jest.fn()
    };

    const props = { ...defaultProps, ...setupProps };
    const wrapper = mount (
        <Link {...props} />
    );

    return {
        props,
        wrapper
    };
};

describe('Components: <Link />', () => {

    it('renders without crashing', () => {
        const { wrapper } = setup();

        expect(wrapper.find('.link').hasClass('link_active')).toEqual(false);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders active link', () => {
        const { wrapper } = setup({ active: true });

        expect(wrapper.find('.link').hasClass('link_active')).toEqual(true);
        expect(wrapper).toMatchSnapshot();
    });

    it('calls onClick() on click', () => {
        const preventDefault = jest.fn();
        const { props, wrapper } = setup();

        expect(wrapper).toMatchSnapshot();

        wrapper.find('a').simulate('click', { preventDefault });
        // не уверен, что здесть правильно так тестировать
        // изменение стейта после экшена.
        wrapper.setProps({ active: true });
        expect(wrapper.find('.link').hasClass('link_active')).toEqual(true);
        expect(props.onClick).toBeCalled();
        expect(preventDefault).toBeCalled();

        expect(wrapper).toMatchSnapshot();
    });

});
