import { updateObject, createReducer } from '../../services/utility';
import * as actionTypes from './actionTypes';

const initialState = {
    vehicles: [],
    filters: null,
    status: ''
};

const getVehicles = (state, action) => {
    return updateObject(state, {
        vehicles: action.vehicles,
        status: 'OK'
    });
};

const requestVehicles = (state, action) => {
    return updateObject(state, {
        filters: action.filters
    });
};

const invalidRequestVehicles = (state, action) => {
    return updateObject(state, {
        status: action.status
    });
};

export default createReducer(initialState, {
    [actionTypes.GET_VEHICLES]: getVehicles,
    [actionTypes.REQUEST_VEHICLES]: requestVehicles,
    [actionTypes.INVALID_REQUEST_VEHICLES]: invalidRequestVehicles
});
