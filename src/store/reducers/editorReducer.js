import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
//wordList has the format: [{word: 'Hello', frequency: 3}]
//where the order is sorted according to decreasing frequencies

const initialState = {
    userInput: '',
    wordList: [],
    setting: {
        caseSensitive: false,
        commonWordFilter: true,
    },
    wordOnFocus: '',
    textEditable: true,
    dialogInfo: {open: false, dialogTitle: '', components: []},
    indexToExpand: -1
};

const generateWordList = (input, setting) => {
    if(!setting.caseSensitive) input = input.toLowerCase();
    let inputWords = input.split(/[/.\s!,.()]/g);
    inputWords = inputWords.filter(x => x!== '');
    let wordListObject = {};
    for(let i in inputWords){
        const word = inputWords[i];
        if(wordListObject[word]){
            wordListObject[word]++;
        }else{
            wordListObject[word] = 1;
        }
    }
    const words = Object.keys(wordListObject);
    const frequencies= Object.values(wordListObject);
    let updatedWordList = words.map((word, i) => ({word: word, frequency: frequencies[i]}));
    updatedWordList.sort((a, b) => b.frequency - a.frequency);
    return updatedWordList;
}

const storeUserInput = (state, action) => {
    return updateObject(state, {
        wordList: generateWordList(action.input, state.setting),
        userInput: action.input
    });
}

const updateWordOnFocus = (state, action) => {
    return updateObject(state, {
        wordOnFocus: action.wordOnFocus
    });
}

const toggleTextEditable = (state, action) => {
    //if clicking onto the textfield and textEditable is been toggled on,
    //close card by setting indexToExpand to -1
    return updateObject(state,{
        textEditable: !state.textEditable,
        indexToExpand: state.textEditable? state.indexToExpand : -1
    });
}

const updateDialogInfo = (state, action) => {
    return updateObject(state, {
        dialogInfo: action.updatedDialogInfo
    });
}

const updateSetting = (state, action) => {
    return updateObject(state, {
        wordList: generateWordList(state.userInput, action.updatedSetting),
        setting: action.updatedSetting
    });
}

const updateIndexToExpand = (state, action) => {
    return updateObject(state, {
        indexToExpand: action.updatedIndexToExpand
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_USER_INPUT:
            return storeUserInput(state, action);
        case actionTypes.UPDATE_WORD_ON_FOCUS:
            return updateWordOnFocus(state, action);
        case actionTypes.TOGGLE_TEXT_EDITABLE:
            return toggleTextEditable(state, action);
        case actionTypes.UPDATE_DIALOG_INFO:
            return updateDialogInfo(state, action);
        case actionTypes.UPDATE_SETTING:
            return updateSetting(state, action);
        case actionTypes.UPDATE_INDEX_TO_EXPAND:
            return updateIndexToExpand(state, action);
        default: 
            return state
    }
}

export default reducer;