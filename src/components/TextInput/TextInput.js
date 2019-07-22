import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highlighter from 'react-highlight-words';
import * as actionTypes from '../../store/actionTypes';
import classes from './TextInput.css';

class TextInput extends Component {

    handleChange = (event) => {
        this.props.storeUserInput(event.target.value)
    }

    componentWillUnmount() { 
        this.contentAreaRef.removeEventListener('input');
    }
    render() {
        console.log(this.props.wordOnFocus)
        return (
            <div>
            <form className={classes.contentWrapper} style={this.props.textEditable? null : {display: 'none'}}>
                <textarea className={classes.contentArea} onChange={this.handleChange}/>
            </form>
            <div className={classes.contentArea} style={this.props.textEditable? {display: 'none'} : null} onClick={this.props.toggleTextEditable}>
                <Highlighter textToHighlight={this.props.textToHighlight} searchWords={this.props.wordOnFocus} />
            </div>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        textEditable: state.textEditable,
        wordOnFocus: state.wordOnFocus,
        textToHighlight: state.userInput,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeUserInput: (input) => dispatch({ type: actionTypes.STORE_USER_INPUT, input: input }),
        toggleTextEditable: () => dispatch({type: actionTypes.TOGGLE_TEXT_EDITABLE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);