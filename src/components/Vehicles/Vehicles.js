import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Vehicle from './Vehicle';
import * as actions from './actions';
import './vehicles.css';

export const Vehicles = ({ vehicles, onGetVehicles }) => {
    const vehiclesReady = vehicles.map(vehicle => (
        <Vehicle key={vehicle.vehicle_id} data={vehicle} />
    ));
    const clickTest = e => {
        onGetVehicles(null);
    }
    return (
        <div className="Vehicles">
            <button onClick={clickTest}>Test it</button>
            <ul>
                {vehiclesReady}
            </ul>
        </div>
    )
};

Vehicles.propTypes = {
    vehicles: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onGetVehicles: (filters) => dispatch(actions.getVehicles(filters))
});

const mapStateToProps = (state) => ({
    vehicles: state.vehiclesReducer.vehicles
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vehicles);
