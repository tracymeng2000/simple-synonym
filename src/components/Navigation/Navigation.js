import React, { Component } from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import settingIcon from '../../assets/images/settingIcon.png';
import uploadDocument from '../../assets/images/uploadDocument.png';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';
import {colors} from '../../utility/Constants';
import {settingDialog} from '../RenderableComponentData/RenderableComponentData';

const styles = {
  root: {
    width: '100%',
  },
  appBar: {
    backgroundColor: colors.white,
    width: '100%',
    boxShadow: '1px'
  },
  title: {
    flexGrow: 1,
    color: colors.ufoGreen,
    fontFamily: 'Secular One, sans-serif',
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 'auto'
  },
  loginButton: {
    color: '#FFFFFF'
  },
  menuButton: {
    color: '#FFFFFF'
  }
};

class Navigation extends Component {
  handleSettingIconClick = () => {
    this.props.updateDialogInfo({
      open: true, 
      dialogTitle: 'Setting',
      components: settingDialog});
  }

  render(){
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={this.handleSettingIconClick}>
              <img src={settingIcon} style={{width: '40px', height: '40px'}}></img>
            </IconButton>
            <IconButton>
            <img src={uploadDocument} style={{width: '30px', height: '30px'}}></img>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Synple
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateDialogInfo: (updatedDialogInfo) => dispatch({ type: actionTypes.UPDATE_DIALOG_INFO, updatedDialogInfo: updatedDialogInfo})
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Navigation));
