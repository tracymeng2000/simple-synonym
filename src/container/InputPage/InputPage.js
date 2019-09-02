import React, { Component } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import WordChips from '../../components/WordChips/WordChips';
import classes from './InputPage.css';

class InputPage extends Component {
    state = {
        userInput: ''
    }

    render() {
        return (
            <div className={classes.InputPage} >
                <TextInput/>
                <WordChips/>
            </div>
        );
    }
}

export default InputPage;