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
                let synAndSim = data[b].syn.concat(data[b].sim);
                result = result.concat(synAndSim);
            }
            return result;
        default:
            return data;
    }
}