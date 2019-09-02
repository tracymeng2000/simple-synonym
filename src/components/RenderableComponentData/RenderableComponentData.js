import {COMPONENT_TYPE, ID, NO_INTERNET} from '../../utility/Constants';

export const settingDialog = [
    {
      type: COMPONENT_TYPE.FORM_CONTROL_LABEL, 
      config: {
        controlType: COMPONENT_TYPE.SWITCH, 
        label: 'Case Sensitive',
        id: ID.CASE_SENSITIVE}
    },
    {
      type: COMPONENT_TYPE.FORM_CONTROL_LABEL,
      config: {
        controlType: COMPONENT_TYPE.SWITCH, 
        label: 'Common Word Check',
        id: ID.COMMON_WORD}
    },
    {
      type: COMPONENT_TYPE.BUTTON,
      config:{
        label: 'APPLY',
        id: ID.APPLY_SETTING
      }
    }
  ];

export const noInternetErrorDialog = [
  {
    type: COMPONENT_TYPE.TEXT,
    config:{
      content: NO_INTERNET
    },
  },
  {
    type: COMPONENT_TYPE.BUTTON,
    config:{
      label: 'OK',
      id: ID.OK
    }
  },
  {
    type: COMPONENT_TYPE.BUTTON,
    config:{
      label: 'Try Again',
      id: ID.TRY_AGAIN
    }
  }
]