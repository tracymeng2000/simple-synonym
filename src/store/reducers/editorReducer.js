import * as actionTypes from '../actionTypes';
//wordList has the format: [{word: 'Hello', frequency: 3}]
//where the order is sorted according to decreasing frequencies

const initialState = {
    userInput: '',
    wordList: [],
    caseSensitive: false,
    wordOnFocus: [],
    textEditable: true
};

const generateWordList = (input) => {
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
            const updatedWordList = generateWordList(action.input);
            return{
                ...state,
                wordList: updatedWordList,
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
        default: 
            return state
    }
}

export default reducer;