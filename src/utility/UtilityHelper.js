import * as Constants from './Constants';

export const initializeSynonymList = () => {
    let synonymList = {};
    let sourceIds = Object.values(Constants.SOURCES);
    for(let index in sourceIds ){
        synonymList[sourceIds[index]] = new Object();
    }
    console.log(synonymList);
    return synonymList;
}

export const convertSynonymData = (data, sourceId) => {
    let result = [];
    switch(sourceId){
        case(Constants.SOURCES.BIG_HUGE_THESAURUS):
            for(let b in data){
                let syn = data[b].syn;
                result = result.concat(syn);
            }
            return result;
        default:
            return data;
    }
}