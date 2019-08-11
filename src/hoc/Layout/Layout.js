import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Aux from '../Aux/Aux';
import GeneralDialog from '../../components/Dialog/GeneralDialog';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <GeneralDialog />
                <Navigation />
                {this.props.children}
            </Aux>
        );
    }
};

export default Layout;