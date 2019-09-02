import * as actionTypes from './actionTypes';


export const storeUserInput = (input) => {
    return {
        type: actionTypes.STORE_USER_INPUT,
        input: input
    }
}

export const  toggleTextEditable = (editable) => {
    return {
        editable: editable,
        type: actionTypes.TOGGLE_TEXT_EDITABLE
    }
}

export const updateWordOnFocus = (wordOnFocus) => {
    return{
        type: actionTypes.UPDATE_WORD_ON_FOCUS,
        wordOnFocus: wordOnFocus
    }
}

export const  updateDialogInfo = (updatedDialogInfo) => {
    return {
        type: actionTypes.UPDATE_DIALOG_INFO,
        updatedDialogInfo: updatedDialogInfo
    }
}

export const updateSetting = (updatedSetting) => {
    return {
        type: actionTypes.UPDATE_SETTING,
        updatedSetting: updatedSetting
    }
}

export const updateIndexToExpand = (updatedIndexToExpand) => {
    return {
        type: actionTypes.UPDATE_INDEX_TO_EXPAND,
        updatedIndexToExpand: updatedIndexToExpand
    }
}

export const updateTryAgainFunc = (updatedTryAgainFunc) => {
    return {
        type: actionTypes.UPDATE_TRY_AGAIN_FUNC,
        updatedTryAgainFunc: updatedTryAgainFunc
    }
}