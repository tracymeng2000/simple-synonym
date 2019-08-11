import React, {Component} from 'react';
import {Card, CardContent, Typography, CardActions, 
        Button, withStyles, Tabs, Tab, Grid, Paper} from '@material-ui/core';
import {connect} from 'react-redux';

import {words} from '../../assets/data/wordData';

const styles = {
    card: {
        width: '50%',
        margin: '10px 10px 10px 0'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}

class SuggestionCard extends Component{
    
    render() {
        const classes = this.props.classes;
        return (
            this.props.wordOnFocus.length === 0? null : 
            <Card className={classes.card}>
                <CardContent>
                    <Tabs>
                        <Tab label='Noun' style={{backgroundColor: '#eee'}}/>
                    </Tabs>
                    <Typography variant="h5" component="h2">
                    {this.props.wordOnFocus}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    adorable; very strong liking
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View From Source</Button>
                </CardActions>
            </Card>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        wordOnFocus: state.wordOnFocus
    }
}
export default connect(mapStateToProps, null)(withStyles(styles)(SuggestionCard));