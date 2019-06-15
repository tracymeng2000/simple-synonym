import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 'auto',
        color: '#FFFFFF',
        fontWeight: 'bold'
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

    render() {
        const classes = this.props.classes;
        return (
            <Chip
                clickable
                // avatar={<Avatar>{props.avatar}</Avatar>}
                label={this.getLabel()}
                className={[classes.chip, this.getChipClass()].join(' ')}
            />
        );
    }
}

export default withStyles(styles)(wordChip);