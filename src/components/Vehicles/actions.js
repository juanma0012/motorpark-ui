import * as actionTypes from './actionTypes';
import motorparkService from '../../services/motorparkService'

const motorpark = new motorparkService();
export const getVehicles = () => {
    return (dispatch, getState) => {
        let state = getState();
        let filters = {
            make: state.filtersState.filterByMakes,
            type: state.filtersState.filterByTypes,
            model: state.filtersState.filterByModels,
            year_since: state.filtersState.filterYearSince,
            year_until: state.filtersState.filterYearUntil
        };
        motorpark.getVehicles(filters).then(vehicles => {
            dispatch({ type: actionTypes.GET_VEHICLES, vehicles });
        }, error => {
            dispatch(invalidRequest(`Error when the vehicles list was loading. ${error}`));
        });
    }
};

export const removeVehicle = (vehicleId) => {
    return dispatch => {
        dispatch(requestDeleteVehicle(vehicleId));
        motorpark.removeVehicle(vehicleId).then(result => {
            dispatch({ type: actionTypes.REMOVED_VEHICLE, message: "The vehicle was removed successfully" });
            dispatch(getVehicles());
        }, error => {
            dispatch(invalidRequest(`Error trying  to delete the Vehicle. ${error}`));
        });
    }
};

export const saveVehicle = (vehicle) => {
    return dispatch => {
        dispatch(requestSaveVehicle(vehicle));
        if (vehicle.id) {
            motorpark.editVehicle(vehicle.id, vehicle).then(result => {
                dispatch({ type: actionTypes.SAVED_VEHICLE, message: "The vehicle was updated successfully" });

                dispatch(getVehicles());
            }, error => {
                dispatch(invalidRequest(`Error trying to update the Vehicle. ${error}`));
            });
        } else {
            motorpark.addVehicle(vehicle).then(result => {
                dispatch({ type: actionTypes.SAVED_VEHICLE, message: "The vehicle was added successfully" });

                dispatch(getVehicles());
            }, error => {
                dispatch(invalidRequest(`Error trying to added the Vehicle. ${error}`));
            });
        }
    }
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