import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import './App.css';
import Vehicles from './components/Vehicles/Vehicles';
import DeleteDialog from './components/Vehicles/DeleteDialog';
import * as vehiclesActions from './components/Vehicles/actions';
import * as filtersActions from './components/Filters/actions';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.onGetVehicles();
        this.props.onGetMakes();
        this.props.onGetTypes();
    }
    render() {
        return (
            <Container maxWidth="sm">
                <DeleteDialog />
                <Vehicles />
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetVehicles: () => dispatch(vehiclesActions.getVehicles(null)),
    onGetMakes: () => dispatch(filtersActions.getMakes()),
    onGetTypes: () => dispatch(filtersActions.getTypes()),
});


export default connect(
    null,
    mapDispatchToProps
)(App);
