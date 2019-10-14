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
            dispatch(getVehicles(state.vehiclesState.filters));
        }, error => {
            dispatch(invalidRequest(`Error trying  to delete the Vehicle. ${error}`));
        });
    }
};

export const saveVehicle = (vehicle) => {
    return (dispatch, getState) => {
        dispatch(requestSaveVehicle(vehicle));
        if (vehicle.id) {
            motorpark.editVehicle(vehicle.id, vehicle).then(result => {
                dispatch({ type: actionTypes.SAVED_VEHICLE, message: "The vehicle was updated successfully" });
                let state = getState();
                dispatch(getVehicles(state.vehiclesState.filters));
            }, error => {
                dispatch(invalidRequest(`Error trying to update the Vehicle. ${error}`));
            });
        } else {
            motorpark.addVehicle(vehicle).then(result => {
                dispatch({ type: actionTypes.SAVED_VEHICLE, message: "The vehicle was added successfully" });
                let state = getState();
                dispatch(getVehicles(state.vehiclesState.filters));
            }, error => {
                dispatch(invalidRequest(`Error trying to added the Vehicle. ${error}`));
            });
        }
    }
};

export const requestVehicles = (filters) => {
    return { type: actionTypes.REQUEST_VEHICLES, filters };
};
export const requestDeleteVehicle = (vehicleId) => {
    return { type: actionTypes.REQUEST_REMOVE_VEHICLE, vehicleId };
};
export const requestSaveVehicle = (vehicle) => {
    return { type: actionTypes.REQUEST_SAVE_VEHICLE, vehicle };
};
export const invalidRequest = (error) => {
    return { type: actionTypes.INVALID_REQUEST, error };
};

export const askRemoveVehicle = (vehicle) => {
    return { type: actionTypes.ASK_REMOVE_VEHICLE, vehicle };
};