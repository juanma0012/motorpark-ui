import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Vehicle from './Vehicle';
import VehicleCard from './VehicleCard';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import './vehicles.scss';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import Info from '@material-ui/icons/Info';
import Fab from '@material-ui/core/Fab';

export const Vehicles = ({ vehicles, isLoading }) => {
    const vehiclesReady = vehicles.map(vehicle => (
        <Vehicle key={vehicle.vehicle_id} data={vehicle} />
    ));
    const zeroState = (
        <div>
            <Paper className="zeroState">
                <div className="center">
                    <Info className="iconSize"/>
                </div>
                <Typography variant="h5" component="h3">
                    No vehicles found.
                    </Typography>
                <Typography component="p">
                    Please either review the filters or add a new vehicle.
                    </Typography>
            </Paper>
        </div>
    )
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleAddClick = () => {
        setOpenAdd(!openAdd);
    };

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        function tick() {
            // reset when reaching 100%
            setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
        }

        const timer = setInterval(tick, 20);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <React.Fragment>
            <div className="addIcon">
                <Fab color="primary" aria-label="add" onClick={handleAddClick}>
                    <AddIcon/>
                </Fab>
            </div>
            <div className="addData">
                <Collapse in={openAdd} timeout="auto" unmountOnExit>
                    {openAdd ? <VehicleCard vehicle={null} onClose={handleAddClick} /> : null}
                </Collapse>
            </div>
            <div className="center">
                {isLoading ? <CircularProgress variant="determinate" value={progress} /> : null}
            </div>
            {!isLoading && vehiclesReady.length === 0 ? zeroState : null}

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
    vehicles: state.vehiclesState.vehicles,
    isLoading: state.vehiclesState.isLoading
});

export default connect(
    mapStateToProps
)(Vehicles);
