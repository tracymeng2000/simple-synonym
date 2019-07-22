import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import Chip from '@material-ui/core/Chip';
import * as actionTypes from '../../../store/actionTypes';

const styles = {
    chip: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        margin: '5px 5px 5px 5px',
    },
    chipSafe: {
        backgroundColor: '#51F39F',
    },
    chipWarning: {
        backgroundColor: '#F3B651',
    },
    chipDanger: {
        backgroundColor: '#F35851',
    }
};

class wordChip extends Component {
    getChipClass = () => {
        const classes = this.props.classes;
        if(this.props.frequency <= 2){
            return classes.chipSafe;
        }else if(this.props.frequency <= 4){
            return classes.chipWarning;
        }else{
            return classes.chipDanger;
        }
    }

    getLabel = () => {
        return (this.props.word + '(' + this.props.frequency + ')');
    }

    handleChipClick = (wordOnFocus) => {
        let updatedWordOnFocus = [];
        updatedWordOnFocus.push(wordOnFocus);
        this.props.updateWordOnFocus(updatedWordOnFocus);
        if(this.props.textEditable){
            this.props.toggleTextEditable();
        }
    }
    render() {
        const classes = this.props.classes;
        return (
            <Chip
                clickable
                onClick= {() => this.handleChipClick(this.props.word)}
                label={this.getLabel()}
                className={[classes.chip, this.getChipClass()].join(' ')}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        textEditable : state.textEditable
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateWordOnFocus: (wordOnFocus) => dispatch({ type: actionTypes.UPDATE_WORD_ON_FOCUS, wordOnFocus: wordOnFocus }),
        toggleTextEditable: () => dispatch({type: actionTypes.TOGGLE_TEXT_EDITABLE}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(wordChip));