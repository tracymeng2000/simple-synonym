import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditBox from '../../components/EditBox/EditBox';
import WordChips from '../../components/WordChips/WordChips';
import * as actionTypes from '../../store/actionTypes';
import classes from './EditorPage.css';

class EditorPage extends Component{
    render(){
        return(
            <div className={classes.Wrapper}>
                <EditBox />
                <WordChips />
            </div>
        );
    }
}

export default EditorPage;