import * as actionTypes from '../actionTypes';
//wordList has the format: [{word: 'Hello', frequency: 3}]
//where the order is sorted according to decreasing frequencies

const initialState = {
    wordList: [],
    caseSensitive: false,
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
    console.log(updatedWordList)
    return updatedWordList;
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GENERATE_WORD_LIST:
            const updatedWordList = generateWordList(action.input);
            return{
                ...state,
                wordList: updatedWordList
            };
            
        default: 
            return state
    }
}

export default reducer;