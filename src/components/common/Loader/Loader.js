import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {colors} from '../../../utility/Constants';

const Loader = (props) =>(
    props.loaded?
        props.children : 
        <div style={{margin: 'auto', textAlign: 'center', padding: '5px'}}>
            <CircularProgress style={{color: colors.prestigeBlue}} />
        </div>
)

export default Loader;