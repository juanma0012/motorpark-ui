import reducer from '../reducer';
import * as actionTypes from '../actionTypes';

describe('Vehicles reducer', () => {
    describe('WHEN is initialized', () => {
        it('SHOULD return the initial state with vehicles = []', () => {
            expect(reducer(undefined, {})).toEqual({
                vehicles: [],
                filters: null,
                status: ''
            });
        });
    });

    describe('WHEN dispatch the action GET_VEHICLES', () => {
        it('SHOULD store the new language in the state', () => {
            expect(reducer({
                vehicles: []
            }, {
                type: actionTypes.GET_VEHICLES,
                vehicles: [{vehicle_id:3,model_id:4}]
            })).toEqual({
                vehicles: [{vehicle_id:3,model_id:4}]
            });
        })
    });
});
