export const colors = {
    antiFlashWhite:'#f1f2f6',
    watermelon: '#ff4757',
    ufoGreen: '#2ed573',
    clearChill: '#1e90ff',
    orange: '#ffa502',
    white: '#ffffff',
    yellow: '#eccc68',
    black: '#000000',
    bayWharf: '#747d8c',
    prestigeBlue: '#2f3542'
}

export const COMPONENT_TYPE = {
    FORM_CONTROL_LABEL: 'Form Contro Label',
    SWITCH: 'switch',
    TEXT: 'text',
    BUTTON: 'button'
}

export const ID = {
    CASE_SENSITIVE: 'caseSensitive',
    COMMON_WORD: 'commonWord',
    APPLY_SETTING: 'applySetting',
    OK: 'OK',
    TRY_AGAIN: 'tryAgain',
}

export const SOURCES = {
    BIG_HUGE_THESAURUS: 'BigHugeThesaurus'
}
export const SOURCE_DATA = {
    'BigHugeThesaurus':{
        SOURCE_NAME: 'Big Huge Thesaurus',
        SOURCE_ID: 'bigHugeThesaurus',
        BASE_URL: 'http://words.bighugelabs.com/api/2/712e81aedb746472dc6b279b41491239',
        RESPONSES: {
            SUCCESS: 200,
            ALERNATE: 303,
            NOT_FOUND: 404,
            ERROR: 500,
        }
    }
}

export const GET = 'get';
export const FORWARD_SLASH = '/';
export const JSON = 'json';
export const NO_INTERNET = 'Looks like you are not connected to a network, please check your network connection and try again.'