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
    APPLY_SETTING: 'applySetting'
}

export const SOURCES = {
    BIG_HUGE_THESAURUS: 'BigHugeThesaurus'
}
export const SOURCE_DATA = {
    'BigHugeThesaurus':{
        SOURCE_NAME: 'Big Huge Thesaurus',
        SOURCE_ID: 'bigHugeThesaurus',
        BASE_URL: 'https://words.bighugelabs.com/api/2/712e81aedb746472dc6b279b41491239',
        RESPONSES: {
            SUCCESS: 200,
            ALERNATE: 303,
            NOT_FOUND: 404,
            INTERNAL_ERROR: 500,
        }
    }
}

export const GET = 'get';
export const FORWARD_SLASH = '/';
export const JSON = 'json';
