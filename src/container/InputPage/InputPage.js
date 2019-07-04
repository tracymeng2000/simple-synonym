import React, { Component } from 'react';
import { Button, InputAdornment } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';
import TextInput from '../../components/TextInput/TextInput';

class InputPage extends Component {
    state = {
        userInput: ''
    }

    handleButtonClick = () => {
        this.props.storeUserInput(this.state.userInput);
        this.props.history.push('/edit');
    }

    handleTextInput = (event) => {
        this.setState({ userInput: event.target.value });
    }

    render() {
        return (
            <div>
                <TextInput handleTextInput={this.handleTextInput} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        onClick={this.handleButtonClick}
                        style={{
                            backgroundColor: '#a1d13b', color: '#FFF',
                            width: '100%', alignItems: 'center',
                            fontWeight: 'bold', fontSize: '20px'
                        }}>
                        Check
                    </Button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        storeUserInput: (input) => dispatch({ type: actionTypes.STORE_USER_INPUT, input: input })
    }
}

export default connect(null, mapDispatchToProps)(InputPage);