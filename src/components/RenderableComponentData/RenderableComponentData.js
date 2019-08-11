import {COMPONENT_TYPE, ID} from '../../utility/Constants';
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