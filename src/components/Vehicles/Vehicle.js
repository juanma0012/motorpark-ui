import React from 'react'
import PropTypes from 'prop-types'

const Vehicle = ({ data }) => (
    <li className="vehicle">{data.model_name}</li>
);

Vehicle.propTypes = {
    data: PropTypes.object.isRequired
};

export default Vehicle;
