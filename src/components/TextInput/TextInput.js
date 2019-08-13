import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highlighter from 'react-highlight-words';
import * as actionCreators from '../../store/actions/index';
import classes from './TextInput.css';
import Aux from '../../hoc/Aux/Aux';
import {colors} from '../../utility/Constants';

class TextInput extends Component {

    handleChange = (event) => {
        this.props.storeUserInput(event.target.value)
    }

    findChunksAtDifferentWord = (searchWords, textToHighlight) => {
        const chunks = [];
        const singleTextWords = textToHighlight.split(/[/.\s!,.()]/g);
        
        let fromIndex = 0;
        const singleTextWordsWithPos = singleTextWords.map(s => {
            const indexInWord = textToHighlight.indexOf(s, fromIndex);
            fromIndex = indexInWord + s.length;
            return {
                word: s,
                index: indexInWord
            };
        });

        searchWords.forEach(sw => {
            singleTextWordsWithPos.forEach(s => {
              if (s.word === sw || (!this.props.setting.caseSensitive && s.word.toLowerCase() === sw.toLowerCase())) {
                const start = s.index;
                const end = s.index + sw.length;
                chunks.push({
                  start,
                  end
                });
              }})});
        return chunks;
    }

    render() {
        return (
            <Aux>
                <form className={classes.contentWrapper} style={this.props.textEditable? null : {display: 'none'}}>
                    <textarea  
                        placeholder={'start typing here'}
                        className={classes.contentArea} 
                        onChange={this.handleChange}/>
                </form>
                <div className={classes.contentWrapper} style={this.props.textEditable? {display: 'none'} : null}>
                    <div className={classes.contentArea} onClick={this.props.toggleTextEditable}>
                        <Highlighter 
                            textToHighlight={this.props.textToHighlight} 
                            style={{whiteSpace: 'pre-wrap'}} 
                            findChunks={() => this.findChunksAtDifferentWord(new Array(this.props.wordOnFocus), this.props.textToHighlight)}
                            highlightStyle={{backgroundColor: colors.yellow}} searchWords={new Array(this.props.wordOnFocus)} />
                    </div>
                </div>
            </Aux>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        textEditable: state.editor.textEditable,
        wordOnFocus: state.editor.wordOnFocus,
        textToHighlight: state.editor.userInput,
        setting: state.editor.setting
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeUserInput: (input) => dispatch(actionCreators.storeUserInput(input)),
        toggleTextEditable: () => dispatch(actionCreators.toggleTextEditable())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);