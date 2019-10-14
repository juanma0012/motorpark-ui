/**
 * Method that returns a new object with the properties updated
 * @param {Object} oldObject, Contains all the  properties of the object
 * @param {Object} updatedProperties, Contains the properties to be replaced wit new values
 * @returns {Object}, New Object updated
 */
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}