import React, {Component} from 'react';

import TextInput from '../../components/TextInput/TextInput';
import WordChips from '../../components/WordChips/WordChips';

class Editor extends Component {
    render(){
        return (
            <div>
                <TextInput />
                <WordChips />
            </div>
        );
    }
}

export default Editor;