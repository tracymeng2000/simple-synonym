import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';
import { Paper, Icon, List, ListItem, ListItemText, Button, IconButton } from '@material-ui/core';
import {colors} from '../../../utility/Constants';
import {UnfoldMore} from '@material-ui/icons';
import {words} from '../../../assets/data/wordData';

const styles = {
    card: {
        backgroundColor: colors.white,
        fontWeight: 'bold',
        fontSize: '24px',
        padding: '10px',
        minHeight: '50px',
        textAlign: 'left',
    },
    textSafe: {
        color: colors.ufoGreen,
    },
    textWarning: {
        color: colors.orange,
    },
    textDanger: {
        color: colors.watermelon,
    },
    list: {
        height: '198px',
        boxShadow: 'inset 2px 4px 4px rgba(0, 0, 0, 0.25)',
        overflowY: 'scroll',
        fontSize: '24px',
        width: '90%',
        margin: 'auto'
    },
    button:{
        float: 'right',

    }
};

class wordChip extends Component {

    getTextClass = () => {
        const classes = this.props.classes;
        if(this.props.frequency <= 2){
            return classes.textSafe;
        }else if(this.props.frequency <= 4){
            return classes.textWarning;
        }else{
            return classes.textDanger;
        }
    }

    getLabel = () => {
        return (this.props.word + '(' + this.props.frequency + ')');
    }

    handleIconClick = (wordOnFocus, index) => {
        this.props.updateWordOnFocus(wordOnFocus);
        if(this.props.textEditable){
            this.props.toggleTextEditable();
        }
        this.props.updateIndexToExpand(this.props.expanded? -1 : index);
    }

    render() {
        const classes = this.props.classes;
        return (
            <Paper
                className={classes.card}
            >
                <span style={{lineHeight: '50px'}} className={this.getTextClass()}>{this.getLabel()}</span>
                <IconButton style={{padding: '13px 0', float: 'right'}} onClick={() => this.handleIconClick(this.props.word, this.props.index)}>
                    <UnfoldMore/>
                </IconButton>
                {
                    this.props.expanded?
                        <List className={classes.list}>
                            {words.love.noun.syn.map((word, index) => (
                                <ListItem key={index}>
                                    <ListItemText>
                                        {word}
                                    </ListItemText>
                                </ListItem>
                            ))}
                            
                        </List> : null
                }
                {/* <Button>Go to Source</Button> */}
            </Paper>

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