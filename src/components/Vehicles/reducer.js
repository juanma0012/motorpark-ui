import { updateObject, createReducer } from '../../services/utility';
import * as actionTypes from './actionTypes';

const initialState = {
    vehicles: [],
    isLoading: true,
    status: '',
    vehicleToRemove: null,
    vehicleToSave: null
};

const getVehicles = (state, action) => {
    return updateObject(state, {
        vehicles: action.vehicles,
        status: '',
        isLoading: false
    });
};

const requestSaveVehicle = (state, action) => {
    return updateObject(state, {
        vehicleToSave: action.vehicle
    });
};

const invalidRequest = (state, action) => {
    return updateObject(state, {
        status: action.status
    });
};

const askRemoveVehicle = (state, action) => {
    return updateObject(state, {
        vehicleToRemove: action.vehicle
    });
};

const removedVehicle = (state, action) => {
    return updateObject(state, {
        vehicleToRemove: null,
        status: action.message
    });
};

const savedVehicle = (state, action) => {
    return updateObject(state, {
        vehicleToSave: null,
        status: action.message
    });
};

export default createReducer(initialState, {
    [actionTypes.GET_VEHICLES]: getVehicles,
    [actionTypes.INVALID_REQUEST]: invalidRequest,
    [actionTypes.ASK_REMOVE_VEHICLE]: askRemoveVehicle,
    [actionTypes.REMOVED_VEHICLE]: removedVehicle,
    [actionTypes.REQUEST_SAVE_VEHICLE]: requestSaveVehicle,
    [actionTypes.SAVED_VEHICLE]: savedVehicle
});
