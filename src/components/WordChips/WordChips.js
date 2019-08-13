import React, { Component } from 'react';
import { connect } from 'react-redux';

import WordChip from './WordChip/WordChip';

class WordChips extends Component {

    render() {
        return (
            <ul style={{width: '50%', overflowY: 'scroll', padding: '0', alignContent: 'center'}}>
                {this.props.wordList.map((item, i) => (
                    <li style={{listStyle: 'none', width: '90%', margin: '9px auto'}} key={i}>
                        <WordChip 
                            frequency={item.frequency} 
                            word={item.word} key={i} 
                            index={i}/>
                    </li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return ({
        wordList: state.editor.wordList,
    });
}

export default connect(mapStateToProps, null)(WordChips);