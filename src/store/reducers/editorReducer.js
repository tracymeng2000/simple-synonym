import * as actionTypes from '../actionTypes';
//wordList has the format: [{word: 'Hello', frequency: 3}]
//where the order is sorted according to decreasing frequencies

const initialState = {
    userInput: '',
    wordList: [],
    caseSensitive: false,
    commonWordFilter: true,
    wordOnFocus: '',
    textEditable: true,
    dialogInfo: {open: false, dialogTitle: '', components: []}
};

const generateWordList = (input, caseSensitive) => {
    if(!caseSensitive) input = input.toLowerCase();
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


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_USER_INPUT:
            return{
                ...state,
                wordList: generateWordList(action.input, state.caseSensitive),
                userInput: action.input
            };
        case actionTypes.UPDATE_WORD_ON_FOCUS:
            return{
                ...state,
                wordOnFocus: action.wordOnFocus
            };
        case actionTypes.TOGGLE_TEXT_EDITABLE:
            return{
                ...state,
                textEditable: !state.textEditable
            }
        case actionTypes.UPDATE_DIALOG_INFO:
            console.log(action.updatedDialogInfo);
            return {
                ...state,
                dialogInfo: action.updatedDialogInfo
            }
        case actionTypes.TOGGLE_CASE_SENSITIVE:
            return{
                ...state,
                wordList: generateWordList(state.userInput, action.caseSensitiveOn),
                caseSensitive: action.caseSensitiveOn
            }
        default: 
            return state
    }
}

export default reducer;