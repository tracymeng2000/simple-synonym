import {Switch, withStyles} from '@material-ui/core';
import {colors} from '../../../utility/Constants';

const BlueSwitch = withStyles({
    switchBase: {
      color: colors.clearChill,
      '&$checked': {
        color: colors.clearChill,
        '&:hover': {
          backgroundColor: 'rgba(30, 144, 255, 0.1)',
        }
      },
      '&$checked + $track': {
        backgroundColor: colors.clearChill,
      },
    },
    checked: {},
    track: {},
})(Switch);

export default BlueSwitch;