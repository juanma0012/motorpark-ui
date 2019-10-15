import React from 'react';
import Divider from '@material-ui/core/Divider';

import './filters.scss';
import FilterMakes from './FilterMakes';
import FilterTypes from './FilterTypes';
import FilterModels from './FilterModels';

export const Filters = () => {

    return (
        <div className="filters">
            <FilterMakes />
            <Divider />
            <div className="subtitle">
                Types
            </div>
            <FilterTypes />
            <Divider />
            <div className="subtitle">
                Models
            </div>
            <FilterModels />

        </div>
    )
};


export default Filters;
