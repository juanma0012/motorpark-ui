import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import './filters.scss';
import FilterMakes from './FilterMakes';
import FilterTypes from './FilterTypes';

export const Filters = () => {

    return (
        <div className="filters">
            <FilterMakes />
            <Divider />
            <div className="subtitle">
                Types
            </div>
            <FilterTypes />
        </div>
    )
};


export default Filters;
