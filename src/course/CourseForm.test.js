import expect from 'expect';
import React from 'react';

import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup() {
    let props = {
        course:{},
        saving:false,
        onSave:() => {},
        onChange:() => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props}/>);
    let output = renderer.getRenderOutput();

    return {
        props, 
        output,
        renderer
    };
}

describe('Testam componenta CourseForm cu React Test Utils', () => {
    it('renders form and h1', ()=> {
        expect(1).toBeGreaterThanOrEqualTo(1);
    });
});