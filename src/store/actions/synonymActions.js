import * as actionTypes from './actionTypes';
import * as Constants from '../../utility/Constants';
import {convertSynonymData} from '../../utility/UtilityHelper';

import axios from 'axios';

export const getSynonymFromSource = (word, sourceId, callback) => {
    if(navigator.onLine){
        let url = Constants.SOURCE_DATA[sourceId].BASE_URL + Constants.FORWARD_SLASH + word + Constants.FORWARD_SLASH + Constants.JSON;
        return dispatch => {
        axios.get(url)
        .then((response) => {
            console.log(response);
            console.log(Constants.SOURCE_DATA[sourceId].RESPONSES.SUCCESS);
            if(response.status === Constants.SOURCE_DATA[sourceId].RESPONSES.SUCCESS){
                let responseData = convertSynonymData(response.data, sourceId);
                callback(responseData, null);
                dispatch({
                    type: actionTypes.UPDATE_SYNONYM_LIST,
                    synonymData: responseData,
                    word: word
                })
            } 
        })
        .catch((error) => {
            console.log(error);
        })}
    }else{
        console.log('no internet');
    }
    
}