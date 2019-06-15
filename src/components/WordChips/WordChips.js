import React, { Component } from 'react';
import { connect } from 'react-redux';

import WordChip from './WordChip/WordChip';


class WordChips extends Component {

    render() {
        return (
            <div>
                {this.props.wordList.map((item, i) => {
                    return <WordChip frequency={item.frequency} word={item.word} key={i} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        wordList: state.wordList
    });
}

export default connect(mapStateToProps, null)(WordChips);