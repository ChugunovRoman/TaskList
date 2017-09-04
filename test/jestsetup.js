'use strict';

import { shallow, render, mount } from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;

// валим тест при малейший ошибке
console.error = message => {
  throw new Error(message);
};
