import React, { Component } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import WordChips from '../../components/WordChips/WordChips';

class InputPage extends Component {
    state = {
        userInput: ''
    }

    render() {
        return (
            <div style={{height: '90%', 
                        display: 'flex', 
                        flexDirection: 'row', 
                        width: '100%', 
                        justifyContent: 'space-between'}} >
                <TextInput/>
                <WordChips/>
            </div>
        );
    }
}

export default InputPage;