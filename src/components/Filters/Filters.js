import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Vehicle from './Vehicle';
import List from '@material-ui/core/List';
import './vehicles.scss';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';

export const Vehicles = ({ vehicles, isLoading }) => {
    const vehiclesReady = vehicles.map(vehicle => (
        <Vehicle key={vehicle.vehicle_id} data={vehicle} />
    ));

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        function tick() {
            // reset when reaching 100%
            setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
        }

        const timer = setInterval(tick, 2);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <React.Fragment>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            {isLoading ? <CircularProgress variant="determinate" value={progress} /> : null}
            <List className="vehicles">
                {vehiclesReady}
            </List>
        </React.Fragment>
    )
};

Vehicles.propTypes = {
    vehicles: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    vehicles: state.vehiclesReducer.vehicles,
    isLoading: state.vehiclesReducer.isLoading
});

export default connect(
    mapStateToProps
)(Vehicles);
