import { colors } from './colors';

const scrollBar = color => `
  &::-webkit-scrollbar {
    background: transparent;
    border-left: none;
    margin-right: 10px;
    width: 10px;
    height: 10px
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    background-color: ${color};
    border: 1px solid transparent;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const darkScrollbar = scrollBar(colors.black40);
export const lightScrollbar = scrollBar(colors.white40);

export const scrollbars = {
  darkScrollbar,
  lightScrollbar
}