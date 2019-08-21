import { darkBlue, white } from "../styles/colors";
import {colors} from '../styles';

export const lineSelectInputBoxTransparentTheme = {
  background: 'transparent',
  borderRadius: '0',
  borderWidth: '1px',
  leftDisplayPosition: '0',
  caretTopPosition: '62%',
  selectDisplayWidth: '240px'
}

export const darkTheme = {
  background: darkBlue.darkBlue,
  valueColor: white.white90,
  labelColor: white.white60,
  borderColor: white.white40,
  requiredColor: white.white60
}

export default {lineSelectInputBoxTransparentTheme, darkTheme};
