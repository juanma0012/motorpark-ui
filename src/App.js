import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import Vehicles from './components/Vehicles/Vehicles';
import DeleteDialog from './components/Vehicles/DeleteDialog';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){     

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

export default App;
