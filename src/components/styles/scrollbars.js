import { colors } from './colors';

export const darkScrollbar = `
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
    background-color: ${colors.black40};
    border: 1px solid transparent;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`