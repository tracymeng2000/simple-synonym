import React, { Component } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import WordChips from '../../components/WordChips/WordChips';

class InputPage extends Component {
    state = {
        userInput: ''
    }

    render() {
        return (
            <div>
                <TextInput/>
                <WordChips />
            </div>
        );
    }
}

export default InputPage;