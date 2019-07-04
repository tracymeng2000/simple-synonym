import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '100%'
  },
  appBar: {
    backgroundColor: '#a1d13b',
    width: '100%'
  },
  title: {
    flexGrow: 1,
    color: '#FFFFFF',
    fontFamily: 'Shadows Into Light, cursive',
    fontWeight: 'bold',
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
  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {/* <img src={logo} style={{height: '80px', width: '80px'}}/> */}
            <Typography variant="h6" className={classes.title}>
              Synple
            </Typography>
            <Button className={classes.loginButton}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);
