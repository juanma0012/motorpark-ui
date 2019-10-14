import * as actionTypes from './actionTypes';
import motorparkService from '../../services/motorparkService'

const motorpark = new motorparkService();
export const getVehicles = (filters) => {
    return dispatch => {
        dispatch(requestVehicles(filters));
        motorpark.getVehicles(filters).then(vehicles => {
            dispatch({ type: actionTypes.GET_VEHICLES, vehicles });
        }, error => {
            dispatch(invalidRequest(`Error when the vehicles list was loading. ${error}`));
        });
    }
};

export const removeVehicle = (vehicleId) => {
    return (dispatch, getState) => {
        dispatch(requestDeleteVehicle(vehicleId));
        motorpark.removeVehicle(vehicleId).then(result => {
            dispatch({ type: actionTypes.REMOVED_VEHICLE, message: "The vehicle was removed successfully" });
            let state = getState();
            dispatch(getVehicles(state.vehiclesReducer.filters));
        }, error => {
            dispatch(invalidRequest(`Error trying  to delete the Vehicle. ${error}`));
        });
    }
};

export const requestVehicles = (filters) => {
    return { type: actionTypes.REQUEST_VEHICLES, filters };
};
export const requestDeleteVehicle = (vehicleId) => {
    return { type: actionTypes.REQUEST_REMOVE_VEHICLE, vehicleId };
};
export const invalidRequest = (error) => {
    return { type: actionTypes.INVALID_REQUEST, error };
};

export const askRemoveVehicle = (vehicle) => {
    return { type: actionTypes.ASK_REMOVE_VEHICLE, vehicle };
};