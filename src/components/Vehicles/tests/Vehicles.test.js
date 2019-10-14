import React from 'react';
import { shallow } from 'enzyme';
import { Vehicles } from '../Vehicles';
import Vehicle from '../Vehicle';

describe('Component Vehicles ', () => {
    const list = [
        { vehicle_id: 3, model_id: 4 },
        { vehicle_id: 7, model_id: 1 }
    ]
    const component = shallow(<Vehicles vehicles={list} />);

    describe('WHEN is initialized ', () => {
        it('SHOULD render correctly ', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('WHEN receive a list of vehicles ', () => {
        it('SHOULD render all the vehicles ', () => {
            expect(component.find(Vehicle)).toHaveLength(2);
        });
    });
});
