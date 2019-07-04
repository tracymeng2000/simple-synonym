import React, { Component } from 'react';

import classes from './TextInput.css';

class TextInput extends Component {
    render() {
        return (
            <form className={classes.form}>
                <textarea
                    className={classes.TextArea} 
                    placeholder='type in your text now'
                    onChange={this.props.handleTextInput}
                    id='textarea' 
                    name="text" 
                    style={{whiteSpace: 'pre-wrap',display: 'inline-block'}}>
                </textarea>
            </form>
        );
    }
}



export default TextInput;