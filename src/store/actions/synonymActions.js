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
            if(response.status === Constants.SOURCE_DATA[sourceId].RESPONSES.SUCCESS){
                console.log('in here')
                let responseData = convertSynonymData(response.data, sourceId);
                callback(responseData, null);
                dispatch({
                    type: actionTypes.UPDATE_SYNONYM_LIST,
                    synonymData: responseData,
                    word: word
                })
            }else{
                callback(null, response);
            } 
        })
        .catch((error) => {
            console.log(null, error);
        })}
    }else{
        return dispatch => {
            callback(null, Constants.NO_INTERNET);
        }
    }
    
}