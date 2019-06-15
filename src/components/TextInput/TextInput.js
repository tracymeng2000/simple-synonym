import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './TextInput.css';
import * as actionTypes from '../../store/actionTypes';

class TextInput extends Component {
    handleButtonClick = () => {
        this.props.handleButtonClick(document.getElementById('textarea').textContent);
    }


    render() {
        
        return (
            <div className={classes.wrapper}>
                <div contentEditable className={classes.paper}
                    id='textarea' name="text" style={{whiteSpace: 'pre-wrap',display: 'inline-block'}}>
                    Type in your text now
                </div>
            <button className={classes.button} onClick={() => this.handleButtonClick()}>Check</button>
        </div>
        );
    }
}

// const mapStateToProps = state => {
//     return null;
// }
const mapDispatchToProps = dispatch => {
    return {
        handleButtonClick: (input) => dispatch({type: actionTypes.GENERATE_WORD_LIST, input: input }),
    }
}

export default connect(null, mapDispatchToProps)(TextInput);