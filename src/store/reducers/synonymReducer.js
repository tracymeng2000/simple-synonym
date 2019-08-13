import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import * as Constants from '../../utility/Constants';
import {convertSynonymData, initializeSynonymList} from '../../utility/UtilityHelper';

const initialState = {
    sourceId: Constants.SOURCES.BIG_HUGE_THESAURUS,
    synonymList: initializeSynonymList()

};

const updateSynonymList = (state, action) => {
    console.log(action.word);
    let updatedSynonymList = {...state.synonymList};
    updatedSynonymList[state.sourceId][action.word] = action.synonymData;
    return updateObject(state, {
        synonymList: updatedSynonymList
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.UPDATE_SYNONYM_LIST): 
            return updateSynonymList(state, action);
        default: 
            return state
    }
}

export default reducer;