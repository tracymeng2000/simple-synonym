import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';

import classes from './EditBox.css'
class EditBox extends Component{
    render(){
        return(
            <div className={classes.textWrapper}>
                <Highlighter
                    searchWords={['Tracy']}
                    autoEscape={true}
                    textToHighlight={this.props.userInput}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        wordList: state.wordList,
        userInput: state.userInput
    });
}

export default connect(mapStateToProps, null)(EditBox);