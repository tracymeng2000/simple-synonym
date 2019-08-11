import React, {Component} from 'react';
import {Dialog, FormControlLabel} from '@material-ui/core';
import {COMPONENT_TYPE} from '../../utility/Constants';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';
import BlueSwitch from './renderableComponents/BlueSwitch';


class GeneralDialog extends Component{
    handleClose = () => {
        this.props.updateDialogInfo({open: false, components: []});
    }
    render(){
        console.log(this.props.dialogInfo)
        return(
            <Dialog open={this.props.dialogInfo.open} onClose={this.handleClose}>
                {this.props.dialogInfo.components.map((component, index) => (
                    component.type === COMPONENT_TYPE.FORM_CONTROL_LABEL? 
                        (component.config.controlType === COMPONENT_TYPE.SWITCH?
                            <FormControlLabel
                                key={index}
                                control={
                                    <BlueSwitch/>
                                }
                            label={component.config.label}/>  : null)
                        : null
                ))}
            </Dialog>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        dialogInfo : state.dialogInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDialogInfo: (updatedDialogInfo) => dispatch({ type: actionTypes.UPDATE_DIALOG_INFO, updatedDialogInfo: updatedDialogInfo})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralDialog);