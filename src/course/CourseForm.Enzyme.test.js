import expect from 'expect';
import React from 'react';
import {mount, shalow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
    const props = {
        course:{},
        saving:saving,
        errors:{},
        onSave:() => {},
        onChange:() => {}
    };

    return shalow(<CourseForm {...props} />);
}

it('renders form and h1', ()=>{
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
});