import React, {Component} from 'react';
import {Dialog, FormControlLabel, DialogTitle, DialogContent, DialogActions, Button} from '@material-ui/core';
import {COMPONENT_TYPE, ID, colors} from '../../utility/Constants';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import BlueSwitch from '../common/renderableComponents/BlueSwitch';


class GeneralDialog extends Component{
    state = {
        caseSensitive: this.props.caseSensitive,
        commonWordFilter: this.props.commonWordFilter,
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.dialogInfo.open !== this.props.dialogInfo.open && this.props.dialogInfo.open){
            this.setState({
                caseSensitive: this.props.caseSensitive,
                commonWordFilter: this.props.commonWordFilter
            })
        }
    }

    handleClose = () => {
        this.props.updateDialogInfo({open: false, components: []});
    }

    handleChange = (id) => {
        switch(id){
            case(ID.CASE_SENSITIVE):
                this.setState({
                    caseSensitive: !this.state.caseSensitive
                })
                break;
            case(ID.COMMON_WORD):
                this.setState({
                    commonWordFilter: !this.state.commonWordFilter
                })
                break;
            default:
                // console.log(id);
        }
    }

    handleButtonClick = (id) => {
        switch(id){
            case (ID.APPLY_SETTING):
                this.props.updateSetting({
                    caseSensitive: this.state.caseSensitive,
                    commonWordFilter: this.state.commonWordFilter
                });
                this.handleClose();
                break;
            case (ID.OK):
                this.handleClose();
                break;
            case (ID.TRY_AGAIN):
                this.props.tryAgainFunc();
                this.handleClose();
                break;
            //implement try again function here later
            break;
        }
    }

    isChecked = (id) => {
        switch(id){
            case(ID.CASE_SENSITIVE):
                return this.state.caseSensitive
            case(ID.COMMON_WORD):
                return this.state.commonWordFilter
            default:
                return false;
        }
    }

    render(){
        const dialogContent = [];
        const dialogActions = [];
        for(let dialogComponentIndex in this.props.dialogInfo.components){
            const component = this.props.dialogInfo.components[dialogComponentIndex];
            switch(component.type){
                case(COMPONENT_TYPE.FORM_CONTROL_LABEL):
                    dialogContent.push(
                        <FormControlLabel
                            style={{display: 'inherit'}}
                            key={dialogComponentIndex}
                            control={
                                <BlueSwitch 
                                checked = {this.isChecked(component.config.id)}
                                onChange={() => this.handleChange(component.config.id)}/>
                            }
                            label={component.config.label}/>
                    )
                    break;
                case(COMPONENT_TYPE.BUTTON):
                    dialogActions.push(
                        <Button 
                            key={dialogComponentIndex}
                            id={component.config.id} 
                            onClick={()=>this.handleButtonClick(component.config.id)}
                            style={{backgroundColor: colors.clearChill, color: colors.white, fontWeight: 'bold'}}>
                            {component.config.label}
                        </Button>
                    )
                    break;
                case(COMPONENT_TYPE.TEXT):
                    dialogContent.push(
                        <text key={dialogComponentIndex}>
                            {component.config.content}
                        </text>
                    )
                default:
                    //do nothing
            }

        }

        return(
            <Dialog open={this.props.dialogInfo.open} onClose={this.handleClose}>
                <DialogTitle>
                    {this.props.dialogInfo.dialogTitle}
                </DialogTitle>
                <DialogContent>
                    {dialogContent.map(contentItem => (
                        contentItem
                    ))}
                </DialogContent>
                <DialogActions>
                    {dialogActions.map(actionItem => (
                        actionItem
                    ))}
                </DialogActions>
            </Dialog>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        dialogInfo : state.editor.dialogInfo,
        caseSensitive: state.editor.setting.caseSensitive,
        commonWordFilter: state.editor.setting.commonWordFilter,
        tryAgainFunc: state.editor.tryAgainFunc,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDialogInfo: (updatedDialogInfo) => dispatch(actionCreators.updateDialogInfo(updatedDialogInfo)),
        updateSetting: (updatedSetting) => dispatch(actionCreators.updateSetting(updatedSetting)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralDialog);