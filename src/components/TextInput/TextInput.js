import React, { Component } from 'react';

import classes from './TextInput.css';

class TextInput extends Component {
    render() {
        return (
            <div id="wrapper">

                <form id="paper" method="get" action="">
                    {/* <div id="margin">Title: <input id="title" type="text" name="title"></div> */}
                    <textarea placeholder="Start typing" className={classes.text} name="text" rows="15" 
                        style={{overflow: 'hidden', wordWrap: 'break-word', resize: 'none', height: '360px', overflowY: 'scroll', fontSize: '12px'}} />
                </form>

            </div>
        );
    }
}
                
export default TextInput;